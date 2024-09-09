<template>
  <q-card class="my-card">
    <q-img :src="house.coverPhoto" class="card-image" />

    <q-card-section>
      <div class="text-h6">{{ house.name }}</div>
      <div class="text-subtitle2">Tamanho: {{ house.size }} m²</div>
      <div class="text-subtitle2">Preço: {{ house.price }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  house: {
    type: Object,
    required: true,
  },
});
</script>

<style>
.my-card {
  width: 300px;
}
.card-image {
  height: 200px;
  object-fit: cover;
}
</style>
