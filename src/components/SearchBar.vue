<script setup>
import { ref } from "vue";

defineEmits(["onSearch"]);

const filter = ref({
  name: "",
});

const onSearch = () => {
  emit("onSearch", filter.value);
};
</script>
<template>
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
        placeholder="1 Dewasa, 0 Anak, 1 Kamar"
        class="w-full focus:outline-none" />
    </div>
    <div class="">
      <button
        class="bg-blue-500 text-white btn-search h-full px-3 rounded-r-md font-bold text-nowrap flex items-center gap-x-2"
        @click="onSearch">
        <i class="pi pi-search text-lg text-white"></i>
        Cari Hotel
      </button>
    </div>
  </div>
</template>
