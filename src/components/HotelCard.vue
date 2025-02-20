<script setup>
import priceFormat from "@/utils/priceFormat";
import { Button, Chip } from "primevue";
import { useRouter } from "vue-router";

defineProps({
  hotel: Object,
});

const router = useRouter();

const toDetails = (id) => {
  router.push({ name: "hotel-details", params: { id } });
};
</script>

<template>
  <div class="hotel-card">
    <div class="card flex bg-white rounded-lg shadow-md overflow-clip">
      <!-- Gambar -->
      <div class="w-1/3 flex flex-col gap-2">
        <div class="top-img w-full">
          <img
            src="/img/hotel.jpeg"
            alt="Hotel Room"
            class="w-full h-auto" />
        </div>

        <div class="bottom-img flex gap-2">
          <div class="wrapper-img flex-auto">
            <img
              src="/img/hotel.jpeg"
              alt="Hotel Room"
              class="w-full h-auto" />
          </div>
          <div class="wrapper-img flex-auto">
            <img
              src="/img/hotel.jpeg"
              alt="Hotel Room"
              class="w-full h-auto" />
          </div>
          <div class="wrapper-img flex-auto">
            <img
              src="/img/hotel.jpeg"
              alt="Hotel Room"
              class="w-full h-auto" />
          </div>
        </div>
      </div>

      <!-- Informasi Hotel -->
      <div class="flex-1 flex">
        <div class="flex-1 p-4">
          <h2 class="text-lg font-bold text-gray-800">{{ hotel.name }}</h2>
          <p class="text-sm text-gray-600">{{ hotel.location }}</p>
          <div class="mt-2 flex flex-wrap gap-2 text-sm text-blue-600">
            <Chip
              v-for="amneti in hotel.amenities"
              :label="amneti"
              class="bg-blue-100 py-1 text-sm" />
          </div>
          <div class="mt-2 text-sm text-gray-500">
            <span class="font-semibold text-blue-500">
              {{ parseFloat(hotel.rating).toFixed(1) }}
            </span>
            ({{ hotel.reviews }} ulasan) Mengesankan
          </div>
        </div>

        <!-- Harga dan Tombol -->
        <div
          class="text-right flex flex-col shadow-left p-4 items-end justify-end">
          <div class="text-green-600 text-sm font-semibold">
            {{ hotel.discount }}% OFF
          </div>
          <div class="text-gray-400 line-through text-sm">
            {{ priceFormat(hotel.originalPrice) }}
          </div>
          <div class="text-orange-500 text-lg font-bold">
            {{ priceFormat(hotel.price) }}
          </div>
          <p class="text-red-500 text-sm font-semibold">
            Sisa 2 kamar di harga ini!
          </p>
          <Button
            class="mt-4 ml-auto font-bold"
            severity="warn"
            @click="toDetails(hotel.id)">
            Pilih Kamar
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
