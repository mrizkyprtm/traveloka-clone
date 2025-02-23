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
    <div
      class="card flex bg-white rounded-lg shadow-md hover:shadow-sky-200 transition overflow-clip">
      <!-- Gambar -->
      <div class="w-1/3 flex flex-col gap-1">
        <div class="top-img w-full">
          <img
            src="/img/hotel.jpeg"
            alt="Hotel Room"
            class="w-full h-auto" />
        </div>

        <div class="bottom-img flex gap-1">
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
        <div class="flex-1 flex flex-col p-4 gap-1">
          <div class="flex justify-between">
            <h3 class="text-lg font-bold text-gray-800">
              {{ hotel.name }}
            </h3>
            <div class="text-sm text-gray-500 font-semibold">
              <span class="font-bold text-blue-500">
                {{ parseFloat(hotel.rating).toFixed(1) }}
              </span>
              ({{ hotel.reviews }} ulasan)
              <p class="text-right text-xs">Mengesankan</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 flex items-center gap-1">
            <i class="pi pi-map-marker text-xs"></i>
            {{ hotel.location }}
          </p>
          <div class="mt-2 flex flex-wrap gap-2 text-sm text-blue-600">
            <Chip
              v-for="amneti in hotel.amenities"
              :label="amneti"
              class="bg-blue-100 py-1 text-xs" />
          </div>
        </div>

        <!-- Harga dan Tombol -->
        <div
          class="text-right flex flex-col shadow-md p-4 items-end justify-end">
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
            label="Pilih Kamar"
            class="mt-4 ml-auto font-bold"
            severity="warn"
            @click="toDetails(hotel.id)"
            :pt="{
              label: {
                class: 'font-bold',
              },
            }" />
        </div>
      </div>
    </div>
  </div>
</template>
