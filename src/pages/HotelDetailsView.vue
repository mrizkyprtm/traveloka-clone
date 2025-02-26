<script setup>
import SearchBar from "@/components/SearchBar.vue";
import { onMounted, ref } from "vue";
import { useHotel } from "@/stores/useHotel";
import { RouterLink, useRoute, useRouter } from "vue-router";
import priceFormat from "@/utils/priceFormat";
import { Button } from "primevue";

const hotel = ref({
  name: "Bukit Vipassana Hotel",
  location: "Lembang, Bandung",
  rating: 8.4,
  reviews: 1160,
  price: 368569,
  images: [
    "/img/hotel.jpeg",
    "/img/hotel.jpeg",
    "/img/hotel.jpeg",
    "/img/hotel.jpeg",
    "/img/hotel.jpeg",
    "/img/hotel.jpeg",
    "/img/hotel.jpeg",
  ],
  description:
    "Hotel ini menawarkan kenyamanan dan fasilitas terbaik untuk Anda.",
  address:
    "JL. Kolonel Masturi No. 99, Lembang, Bandung, Jawa Barat, Indonesia, 40391",
  amenities: [
    "Restoran",
    "Kolam Renang",
    "Resepsionis 24 Jam",
    "WiFi",
    "Parkir",
  ],
});

const { getHotelById } = useHotel();
const route = useRoute();

const result = ref("");
onMounted(() => {
  result.value = getHotelById(route.params.id);
  // console.log(result.value);
  hotel.value.name = result.value.name;
  hotel.value.location = result.value.location;
});

const room = {
  name: "Superior Twin Bed",
  imageUrl: "/img/hotel.jpeg",
  size: "24.0 m²",
  options: [
    {
      id: 1,
      name: "Tanpa Sarapan",
      description: "1 ranjang twin",
      guests: 2,
      price: 368569,
      originalPrice: 491125,
      breakfastIncluded: false,
    },
    {
      id: 2,
      name: "Termasuk sarapan untuk 1 orang",
      description: "1 ranjang twin",
      guests: 1,
      price: 417709,
      originalPrice: 556945,
      breakfastIncluded: true,
    },
  ],
};

const router = useRouter();
const onBook = (id) => {
  router.push({ name: "booking", params: { id } });
};
</script>

<template>
  <div
    class="sticky top-0 flex-1 py-3 bg-white shadow z-10 flex justify-center items-center">
    <div class="container mx-auto max-w-7xl px-6">
      <SearchBar></SearchBar>
    </div>
  </div>

  <div class="container mx-auto max-w-7xl px-4 pt-6">
    <div class="flex gap-2 rounded-t-lg overflow-hidden">
      <!-- Main Image -->
      <div class="w-1/2 m-img">
        <img
          :src="hotel.images[0]"
          :alt="hotel.name"
          class="w-full h-full object-cover" />
      </div>

      <!-- Image Gallery -->
      <div class="flex-auto grid grid-cols-2 md:grid-cols-3 gap-2">
        <div
          v-for="image in hotel.images.slice(1)"
          :key="image"
          class="overflow-hidden shadow-md flex-auto">
          <img
            :src="image"
            :alt="hotel.name"
            class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </div>

  <div
    class="container mx-auto max-w-7xl px-4 py-4 bg-white rounded-xl shadow-[0px_0px_6px_rgba(0,0,0,0.1)]">
    <div class="flex items-center gap-4 mb-4">
      <div class="flex-1 card space-y-1">
        <h2 class="font-bold text-2xl leading-8">{{ hotel.name }}</h2>
        <div class="flex items-center gap-2">
          <div
            class="w-fit text-sm text-sky-700 py-1 px-2 rounded-full bg-sky-100">
            <p>Hotel</p>
          </div>
          <div>
            <i v-for="i in 5" class="pi pi-star-fill text-yellow-400"></i>
          </div>
        </div>
        <p class="text-gray-600">{{ hotel.location }}</p>
      </div>

      <div class="card">
        <!-- Price and Booking Button -->
        <div class="flex gap-4 items-center justify-end">
          <div class="flex flex-col items-end">
            <label for="">Harga/kamar/malam mulai dari</label>
            <p class="!text-xl font-bold text-orange-500">
              {{ priceFormat(hotel.price) }}
            </p>
          </div>
          <RouterLink :to="{ name: 'hotel-details', hash: '#room-details' }">
            <Button
              :pt="{
                label: {
                  class: 'font-semibold',
                },
              }"
              label="Pilih Kamar"
              severity="warn" />
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Alert Message -->
    <div class="bg-blue-100 p-4 rounded-md mb-4">
      <p class="text-blue-700">
        Jangan lewatkan! Sisa 2 kamar untuk harga paling murah.
      </p>
    </div>

    <!-- Grid Layout for Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <!-- Rating Card -->
      <div class="flex gap-2 bg-white rounded-lg border p-4">
        <div class="h-fit border border-sky-600 rounded-lg p-2">
          <span class="text-sky-500 font-bold text-xl">
            {{ hotel.rating }}
          </span>
        </div>
        <div class="h-fit flex flex-col">
          <h3 class="font-bold text-lg">Mengesankan</h3>
          <span class="text-sky-500 text-sm font-bold">
            Dari {{ hotel.reviews }} review tamu yang terverifikasi
          </span>
        </div>
      </div>

      <!-- Accommodation Card -->
      <div class="bg-white rounded-lg border p-4 space-y-3">
        <div class="flex justify-between items-center">
          <h4 class="font-bold">Area Akomodasi</h4>
          <a href="#" class="flex gap-2 items-center text-sky-500 font-bold">
            <span>Lihat Peta</span>
            <i class="pi pi-chevron-right text-xs"></i>
          </a>
        </div>
        <div class="flex items-center gap-3">
          <i class="pi pi-map-marker"></i>
          <p class="text-gray-600">
            {{ hotel.address }}
          </p>
        </div>
      </div>

      <!-- Facilities Card -->
      <div class="bg-white rounded-lg border p-4 space-y-3">
        <div class="flex justify-between items-center">
          <h4 class="font-bold">Fasilitas Utama</h4>
          <a href="#" class="flex gap-2 items-center text-sky-500 font-bold">
            <span>Selengkapnya</span>
            <i class="pi pi-chevron-right text-xs"></i>
          </a>
        </div>
        <ul class="list-disc pl-5">
          <li v-for="amenity in hotel.amenities" class="text-gray-600">
            {{ amenity }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Description Section -->
    <div class="bg-gray-100 p-4 rounded-md">
      <p class="text-gray-700">{{ hotel.description }}</p>
    </div>
  </div>

  <!-- room -->
  <div class="container mx-auto max-w-7xl px-4 py-4" id="room-details">
    <div class="flex flex-col md:flex-row">
      <!-- Left Side: Room Information -->
      <div class="md:w-1/4 mb-6 md:mb-0">
        <h5 class="text-2xl font-bold mb-2">{{ room.name }}</h5>
        <div class="w-full">
          <img
            :src="room.imageUrl"
            :alt="room.name"
            class="w-full h-48 object-cover rounded-lg mb-4" />
        </div>
        <p class="text-gray-600">Ukuran: {{ room.size }}</p>
      </div>

      <!-- Right Side: Room Options Table -->
      <div class="flex-auto flex justify-center items-center p-6">
        <table class="min-w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="py-2 px-4 border-b text-left">Pilihan Kamar</th>
              <th class="py-2 px-4 border-b text-center">Tamu</th>
              <th class="py-2 px-4 border-b text-center">Harga/kamar/malam</th>
              <th class="py-2 px-4 border-b"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="option in room.options">
              <td class="py-2 px-4 border-b">
                {{ option.name }}<br />
                <small class="text-gray-500">
                  {{ option.description }}
                </small>
              </td>
              <td class="py-2 px-4 border-b text-center">
                {{ option.guests }} orang
              </td>
              <td class="py-2 px-4 border-b text-center">
                <span class="line-through text-gray-500">
                  {{ priceFormat(option.originalPrice) }}
                </span>
                <br />
                <span class="text-orange-500 font-bold">
                  {{ priceFormat(option.price) }}
                </span>
              </td>
              <td class="py-2 px-4 border-b">
                <button
                  class="bg-blue-500 text-white rounded-md py-1 px-2"
                  @click="onBook(option.id)">
                  Pilih
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
