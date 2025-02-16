<script setup>
const travelOptions = [
  {
    title: "Kapal Pesiar",
    imageUrl: "https://placehold.co/300x200?text=Kapal+Pesiar",
  },
  {
    title: "Fun Activities",
    imageUrl: "https://placehold.co/300x200?text=Fun+Activities",
  },
  {
    title: "Travel Insurance",
    imageUrl: "https://placehold.co/300x200?text=Travel+Insurance",
  },
  {
    title: "TPayLater",
    imageUrl: "https://placehold.co/300x200?text=TPayLater",
  },
];
</script>
<template>
  <div>
    <div class="container mx-auto max-w-7xl px-4 xl:px-0 py-10">
      <h2 class="text-xl font-bold mb-6">Maksimalkan Rencana Sesukamu</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="option in travelOptions"
          :key="option.title"
          class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/img/travel-opt.webp"
            :alt="option.title"
            class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-semibold">{{ option.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
