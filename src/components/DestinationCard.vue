<script setup>
const destinations = [
  {
    name: "Singapura",
    accommodations: 644,
    imageUrl: "img/singapure.webp",
  },
  {
    name: "Malaysia",
    accommodations: 8371,
    imageUrl: "img/singapure.webp",
  },
  {
    name: "Thailand",
    accommodations: 27449,
    imageUrl: "img/singapure.webp",
  },
  {
    name: "Korea Selatan",
    accommodations: 15929,
    imageUrl: "img/singapure.webp",
  },
  {
    name: "Jepang",
    accommodations: 28141,
    imageUrl: "img/singapure.webp",
  },
  {
    name: "Hong Kong",
    accommodations: 960,
    imageUrl: "img/singapure.webp",
  },
];
</script>
<template>
  <div class="container mx-auto max-w-7xl px-4 xl:px-0 py-10">
    <h3 class="text-2xl font-bold mb-6 text-neutral-700">
      Temukan yang kamu suka di Asia hingga dunia
    </h3>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      <div
        v-for="destination in destinations"
        :key="destination.name"
        class="bg-white rounded-lg shadow-md h-48 overflow-hidden relative">
        <img
          :src="destination.imageUrl"
          alt="{{ destination.name }}"
          class="w-full h-48 object-cover absolute -z-1" />
        <div class="p-4 bg-transparent relative text-white">
          <h4 class="text-xl font-semibold text-white">
            {{ destination.name }}
          </h4>
          <p class="font-semibold text-white">
            {{ destination.accommodations }} accommodations
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
