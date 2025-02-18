<script setup>
import {
  Accordion,
  AccordionPanel,
  AccordionHeader,
  AccordionContent,
  Checkbox,
} from "primevue";
import { onMounted, ref, watch } from "vue";
import { useHotel } from "@/stores/useHotel";
import HotelCard from "@/components/HotelCard.vue";
import SearchBar from "@/components/SearchBar.vue";

const hotelStore = useHotel();
const hotels = ref([]);

const city = ref([]);

onMounted(() => {
  hotels.value = hotelStore.hotels;
});

const filter = hotelStore.filter;

watch(filter, () => {
  hotels.value = hotelStore.filteredHotels;
});

const getSearchVal = (val) => {
  console.log(val);
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
        <SearchBar @onSearch="getSearchVal"></SearchBar>
        <div class="flex flex-auto wrapper-form">
          <div
            class="w-1/3 px-2 py-3 border rounded-l-md border-gray-300 transition-colors hover:border-gray-900 flex items-center gap-x-2">
            <i class="pi pi-map-marker text-lg text-blue-500 ml-2"></i>
            <input
              type="text"
              v-model="filter.name"
              placeholder="Kota, hotel atau tempat wisata"
              class="w-full focus:outline-none outline-0" />
          </div>
          <div
            class="w-1/3 px-2 py-3 border border-gray-300 transition-colors hover:border-gray-900 flex items-center gap-x-2">
            <i class="pi pi-calendar text-lg text-blue-500 ml-2"></i>
            <input
              type="text"
              placeholder="24 Jan - 25 Jan, 1 malam"
              class="w-full focus:outline-none" />
          </div>
          <div
            class="w-1/3 px-2 py-3 border border-gray-300 transition-colors hover:border-gray-900 flex items-center gap-x-2">
            <i class="pi pi-users text-lg text-blue-500 ml-2"></i>
            <input
              type="text"
              v-model="filter.capacity"
              placeholder="1 Dewasa, 0 Anak, 1 Kamar"
              class="w-full focus:outline-none" />
          </div>
          <div class="">
            <button
              class="bg-blue-500 text-white btn-search h-full px-3 rounded-r-md font-bold text-nowrap flex items-center gap-x-2">
              <i class="pi pi-search text-lg text-white"></i>
              Cari Hotel
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto max-w-7xl p-6 flex flex-row gap-4 pt-12">
      <div class="wrapper-comp flex flex-col gap-4">
        <div
          class="card flex justify-center accordion-comp max-w-[270px] min-w-[260px]">
          <Accordion class="text-nowrap w-full" value="0">
            <AccordionPanel value="0">
              <AccordionHeader class="font-bold">Rating</AccordionHeader>
              <AccordionContent>
                <template v-for="item in checkboxs" :key="item.label">
                  <div class="flex gap-2 items-center mb-1">
                    <Checkbox
                      v-model="filter.rating"
                      name="rating"
                      :value="item.value"
                      :inputId="item.label" />
                    <label :for="item.label" class="text-sm">
                      {{ item.label }}
                    </label>
                  </div>
                </template>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </div>

      <div class="wrapper-comp flex flex-col gap-4">
        <template v-for="hotel in hotels" :key="hotel.name">
          <HotelCard :hotel="hotel"></HotelCard>
        </template>
      </div>
    </div>
  </div>
</template>

<style></style>
