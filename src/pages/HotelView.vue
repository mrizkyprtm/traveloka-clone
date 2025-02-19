<script setup>
import { onMounted, ref, watch } from "vue";
import { useHotel } from "@/stores/useHotel";
import HotelCard from "@/components/HotelCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import AccordionFilter from "@/components/AccordionFilter.vue";

const hotelStore = useHotel();
const hotels = ref([]);

onMounted(() => {
  hotels.value = hotelStore.hotels;
});

const filter = hotelStore.filter;

watch(filter, () => {
  hotels.value = hotelStore.filteredHotels;
});

const getSearchVal = (val) => {
  filter.name = val.name;
};

const checkboxs = [
  { label: "7+ Nyaman", value: "7.0" },
  { label: "8+ Mengesankan", value: "8.0" },
  { label: "9+ Luar Biasa", value: "9.0" },
];
</script>
<template>
  <div class="bg-gray-100 min-h-screen hotel-pages">
    <div
      class="sticky top-0 p-3 bg-white shadow-md z-10 flex justify-center items-center">
      <div class="container mx-auto max-w-7xl px-6">
        <SearchBar @onSearch="getSearchVal" />
      </div>
    </div>

    <div class="container mx-auto max-w-7xl p-6 flex flex-row gap-4 pt-12">
      <div class="wrapper-comp flex flex-col gap-4 sticky top-[76px]">
        <AccordionFilter :filter="filter" />
      </div>
      <div class="wrapper-comp flex-auto flex flex-col gap-4">
        <template v-if="hotels.length > 0">
          <template v-for="hotel in hotels" :key="hotel.id">
            <HotelCard :hotel="hotel"></HotelCard>
          </template>
        </template>
        <template v-else>
          <div class="text-center text-lg font-bold text-gray-500 w-full">
            <p>Maaf, hotel yang anda cari tidak ditemukan.</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style></style>
