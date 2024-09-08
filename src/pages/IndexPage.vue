<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="max-width: 1200px; width: 100%">
      <div class="row q-gutter-md">
        <div
          class="col-xs-12 col-md-6 col-lg-4"
          v-for="house in houses"
          :key="house.id"
        >
          <HouseCard :house="house" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import HouseCard from "../components/HouseCard.vue";

const houses = [
  {
    id: 1,
    name: "Casa na Praia",
    size: 120,
    price: "R$ 300.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Casa+na+Praia",
  },
  {
    id: 2,
    name: "Apartamento Urbano",
    size: 80,
    price: "R$ 450.000",
    coverPhoto:
      "https://via.placeholder.com/400x300.png?text=Apartamento+Urbano",
  },
  {
    id: 3,
    name: "Chalé na Montanha",
    size: 150,
    price: "R$ 600.000",
    coverPhoto:
      "https://via.placeholder.com/400x300.png?text=Chalé+na+Montanha",
  },
  {
    id: 4,
    name: "Casa no Campo",
    size: 200,
    price: "R$ 750.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Casa+no+Campo",
  },
  {
    id: 5,
    name: "Apartamento na Praia",
    size: 90,
    price: "R$ 550.000",
    coverPhoto:
      "https://via.placeholder.com/400x300.png?text=Apartamento+na+Praia",
  },
  {
    id: 6,
    name: "Casa de Condomínio",
    size: 130,
    price: "R$ 800.000",
    coverPhoto:
      "https://via.placeholder.com/400x300.png?text=Casa+de+Condomínio",
  },
  {
    id: 7,
    name: "Casa no Lago",
    size: 180,
    price: "R$ 1.200.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Casa+no+Lago",
  },
  {
    id: 8,
    name: "Duplex Urbano",
    size: 110,
    price: "R$ 500.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Duplex+Urbano",
  },
  {
    id: 9,
    name: "Estúdio Moderno",
    size: 50,
    price: "R$ 350.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Estúdio+Moderno",
  },
  {
    id: 10,
    name: "Apartamento Luxuoso",
    size: 200,
    price: "R$ 950.000",
    coverPhoto:
      "https://via.placeholder.com/400x300.png?text=Apartamento+Luxuoso",
  },
  {
    id: 11,
    name: "Cobertura",
    size: 300,
    price: "R$ 1.500.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Cobertura",
  },
  {
    id: 12,
    name: "Casa na Árvore",
    size: 70,
    price: "R$ 290.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Casa+na+Árvore",
  },
  {
    id: 13,
    name: "Loft Industrial",
    size: 100,
    price: "R$ 430.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Loft+Industrial",
  },
  {
    id: 14,
    name: "Apartamento Centro",
    size: 85,
    price: "R$ 470.000",
    coverPhoto:
      "https://via.placeholder.com/400x300.png?text=Apartamento+Centro",
  },
  {
    id: 15,
    name: "Mansão",
    size: 500,
    price: "R$ 2.000.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Mansão",
  },
  {
    id: 16,
    name: "Casa Rústica",
    size: 150,
    price: "R$ 650.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Casa+Rústica",
  },
  {
    id: 17,
    name: "Casa Minimalista",
    size: 130,
    price: "R$ 900.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Casa+Minimalista",
  },
  {
    id: 18,
    name: "Casa Colonial",
    size: 160,
    price: "R$ 780.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Casa+Colonial",
  },
  {
    id: 19,
    name: "Penthouse",
    size: 220,
    price: "R$ 1.100.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Penthouse",
  },
  {
    id: 20,
    name: "Casa de Vila",
    size: 90,
    price: "R$ 460.000",
    coverPhoto: "https://via.placeholder.com/400x300.png?text=Casa+de+Vila",
  },
];
</script>
