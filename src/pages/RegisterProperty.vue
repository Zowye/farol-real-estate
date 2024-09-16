<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 1200px; width: 100%">
      <div class="row q-gutter-md">
        <q-form @submit.prevent="submitProperty">
          <q-input
            v-model="property.description"
            label="Descrição"
            type="textarea"
          />

          <q-select
            v-model="property.homeStatus"
            label="Status do Imóvel"
            :options="homeStatusOptions"
          />

          <q-input v-model="property.price" label="Preço" type="number" />

          <q-input v-model="property.currency" label="Moeda" />

          <q-input v-model="property.bedrooms" label="Quartos" type="number" />

          <q-input
            v-model="property.bathrooms"
            label="Banheiros"
            type="number"
          />

          <q-input
            v-model="property.livingArea"
            label="Área (em m²)"
            type="number"
          />

          <q-input
            v-model="property.yearBuilt"
            label="Ano de Construção"
            type="number"
          />

          <q-input v-model="property.latitude" label="Latitude" type="number" />

          <q-input
            v-model="property.longitude"
            label="Longitude"
            type="number"
          />

          <q-input v-model="property.address.streetAddress" label="Endereço" />

          <q-input v-model="property.address.city" label="Cidade" />

          <q-input v-model="property.address.state" label="Estado" />

          <q-input v-model="property.address.zipcode" label="CEP" />

          <div class="q-mt-md">
            <q-uploader
              label="Fotos do Imóvel"
              multiple
              v-model="property.photos"
              @added="onFilesAdded"
            />
          </div>

          <q-btn class="q-mt-md" label="Enviar" type="submit" color="primary" />
        </q-form>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { QForm, QInput, QSelect, QUploader, QBtn } from "quasar";
import { collection, addDoc } from "firebase/firestore";
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { getDocs } from "firebase/firestore";
import { getFirestore, doc, setDoc, onSnapshot } from "firebase/firestore";
import { db } from "src/boot/firebase";

const testProperty = {
  description: "Teste de Firestore",
  price: 100000,
};

// const testFirestore = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "testCollection"), testProperty);
//     console.log("Documento adicionado com ID:", docRef.id);
//   } catch (error) {
//     console.error("Erro ao adicionar documento de teste:", error);
//   }
// };

const fetchTestCollection = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "teste"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => `, doc.data());
    });
  } catch (error) {
    console.error("Erro ao ler a coleção 'teste':", error);
  }
};

fetchTestCollection();

// testFirestore();

const property = ref({
  description: "",
  homeStatus: "",
  price: null,
  currency: "USD",
  bedrooms: null,
  bathrooms: null,
  livingArea: null,
  yearBuilt: null,
  latitude: null,
  longitude: null,
  address: {
    streetAddress: "",
    city: "",
    state: "",
    zipcode: "",
  },
  photos: [],
});

const homeStatusOptions = [
  { label: "À Venda", value: "FOR_SALE" },
  { label: "Vendido", value: "SOLD" },
  { label: "Alugado", value: "RENTED" },
  // Adicione outros status conforme necessário
];

const submitProperty = async () => {
  try {
    // Salvar fotos no Firebase Storage
    const storage = getStorage();
    const photoUrls = [];

    for (const file of property.value.photos) {
      const photoRef = storageRef(storage, `properties/${file.name}`);
      await uploadBytes(photoRef, file);
      const url = await getDownloadURL(photoRef);
      photoUrls.push(url);
    }

    // Atualizar o objeto property com os URLs das fotos
    const propertyToSave = {
      ...property.value,
      photos: photoUrls,
    };

    // Remover campos nulos ou vazios
    Object.keys(propertyToSave).forEach(
      (key) => propertyToSave[key] == null && delete propertyToSave[key]
    );

    // Adicionar a propriedade ao Firestore
    const docRef = await addDoc(collection(db, "properties"), propertyToSave);

    console.log("Propriedade adicionada com ID:", docRef.id);

    // Limpar o formulário após o envio
    Object.assign(property.value, {
      description: "",
      homeStatus: "",
      price: null,
      currency: "USD",
      bedrooms: null,
      bathrooms: null,
      livingArea: null,
      yearBuilt: null,
      latitude: null,
      longitude: null,
      address: {
        streetAddress: "",
        city: "",
        state: "",
        zipcode: "",
      },
      photos: [],
    });

    // Exibir uma mensagem de sucesso ou redirecionar o usuário
  } catch (error) {
    console.error("Erro ao adicionar a propriedade:", error);
    // Exibir uma mensagem de erro para o usuário
  }
};

const onFilesAdded = () => {
  // Função opcional para manipular os arquivos adicionados
};
</script>

<style scoped></style>
