<script setup>
import priceFormat from "@/utils/priceFormat";

const booking = {
  hotelName: "Bukit Vipassana Hotel",
  rating: 8.4,
  reviews: 1160,
  imageUrl: "/img/hotel.jpeg",
  checkIn: "Kam, 23 Jan 2025",
  checkOut: "Jum, 24 Jan 2025",
  roomType: "(1x) Superior King Bed",
  guests: 2,
  beds: 1,
  breakfastIncluded: false,
  totalPrice: 450023,
  originalPrice: 600030,
};
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <!-- Hotel Name and Rating -->
    <h2 class="text-lg font-bold">{{ booking.hotelName }}</h2>
    <div class="flex items-center mb-2 text-sm gap-x-1">
      <span class="text-blue-500 font-bold">{{ booking.rating }}</span>
      <span class="text-gray-500"> ({{ booking.reviews }} ulasan)</span>
    </div>

    <!-- Hotel Image -->
    <img
      :src="booking.imageUrl"
      :alt="booking.hotelName"
      class="w-full h-48 object-cover mb-4" />

    <!-- Check-in and Check-out -->
    <div class="flex justify-between mb-4">
      <div class="border rounded-lg px-3 py-1">
        <p class="text-gray-600 text-sm">Check-in</p>
        <p class="font-bold">{{ booking.checkIn }}</p>
      </div>
      <div class="self-center text-sm border-b text-gray-600">1 malam</div>
      <div class="border rounded-lg px-3 py-1">
        <p class="text-gray-600 text-sm">Check-out</p>
        <p class="font-bold">{{ booking.checkOut }}</p>
      </div>
    </div>

    <!-- Room Description -->
    <div class="mb-4">
      <p class="font-bold">{{ booking.roomType }}</p>
      <p class="text-sm text-red-500 mb-4">Sisa 2 kamar!</p>
      <p class="text-gray-600 text-sm">
        {{ booking.guests }} Tamu, {{ booking.beds }} Bed
      </p>
      <p class="text-gray-600 text-sm">
        {{ booking.breakfastIncluded ? "Termasuk Sarapan" : "Tanpa Sarapan" }}
      </p>
    </div>

    <!-- Total Price -->
    <div class="flex justify-between items-center border-t pt-4">
      <div>
        <p class="font-bold">Total Harga Kamar</p>
      </div>
      <div class="text-right">
        <p class="text-gray-500 line-through text-sm">
          {{ priceFormat(booking.originalPrice) }}
        </p>
        <p class="text-lg font-bold text-orange-500">
          {{ priceFormat(booking.totalPrice) }}
        </p>
      </div>
    </div>
  </div>
</template>
