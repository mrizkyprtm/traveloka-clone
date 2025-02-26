<script setup>
const hotelDetails = {
  bookingNumber: "1219624837",
  hotelName: "Bukit Vipassana Hotel",
  checkIn: {
    date: "Kam, 20 Februari 2025",
    time: "14:00",
  },
  checkOut: {
    date: "Sab, 22 Februari 2025",
    time: "12:00",
  },
  roomType: "(1x) Superior King Bed Room Only",
  guests: 2,
  beds: 1,
  breakfastIncluded: false,
  amenities: ["WIFI Gratis", "AC", "TV", "Kamar Mandi"],
  specialRequests: "-",
  guestName: "Mochamad Rizky Pratama",
  refundPolicy: ["Tidak Bisa Refund", "Tidak Bisa Reschedule"],
  orderName: "Adi Permana",
  orderEmail: "adiprmn@mail.com",
  orderPhone: "+6281234567890",
};
</script>

<template>
  <div class="bg-lime-200 rounded-lg overflow-hidden sticky top-4">
    <div class="bg-sky-200 py-2 px-4">
      <h2 class="text-xl font-bold">Rincian Hotel</h2>
      <p class="text-gray-600 text-sm font-semibold">
        No. Pesanan: {{ hotelDetails.bookingNumber }}
      </p>
    </div>

    <div class="p-4 rounded-b-lg shadow-lg bg-white">
      <h3 class="font-bold mb-2">{{ hotelDetails.hotelName }}</h3>

      <div class="flex justify-between gap-4 mb-4">
        <div class="border text-center rounded-lg px-4 py-2 space-y-1">
          <p class="text-gray-600 text-xs">Check-in</p>
          <p class="font-bold text-sm">{{ hotelDetails.checkIn.date }}</p>
          <p class="font-bold text-xs text-gray-600">
            Dari {{ hotelDetails.checkIn.time }}
          </p>
        </div>
        <div class="border text-center rounded-lg px-4 py-2 space-y-1">
          <p class="text-gray-600 text-xs">Check-out</p>
          <p class="font-bold text-sm">{{ hotelDetails.checkOut.date }}</p>
          <p class="font-bold text-xs text-gray-600">
            Sebelum {{ hotelDetails.checkOut.time }}
          </p>
        </div>
      </div>

      <div class="space-y-2">
        <p class="font-bold text-sm mb-2">{{ hotelDetails.roomType }}</p>
        <ul class="space-y-1">
          <li class="flex items-center gap-x-2">
            <i class="pi pi-users"></i>
            <p class="text-gray-600 text-xs font-semibold">
              {{ hotelDetails.guests }} Tamu
            </p>
          </li>
          <li class="flex items-center gap-x-2">
            <i class="pi pi-users"></i>
            <p class="text-gray-600 text-xs font-semibold">
              {{ hotelDetails.beds }} Bed
            </p>
          </li>
          <li class="flex items-center gap-x-2">
            <i class="pi pi-users"></i>
            <p class="text-gray-600 text-xs font-semibold">
              {{
                hotelDetails.breakfastIncluded
                  ? "Termasuk Sarapan"
                  : "Tanpa Sarapan"
              }}
            </p>
          </li>
          <li class="flex items-center gap-x-2">
            <i class="pi pi-users"></i>
            <p class="text-gray-600 text-xs font-semibold">
              {{ hotelDetails.amenities.join(", ") }}
            </p>
          </li>
        </ul>
      </div>

      <div class="text-sm">
        <h4 class="font-bold mt-4">Permintaan Khusus (Jika ada)</h4>
        <p class="text-gray-600">{{ hotelDetails.specialRequests }}</p>

        <h4 class="font-bold mt-4 text-sm">Nama Tamu</h4>
        <p class="text-gray-600">{{ hotelDetails.guestName }}</p>

        <h4 class="font-bold mt-4 text-sm">Kebijakan Pembatalan</h4>
        <ul class="list-disc pl-5">
          <li v-for="policy of hotelDetails.refundPolicy" class="text-gray-600">
            {{ policy }}
          </li>
        </ul>

        <h4 class="font-bold mt-4">Data Pemesan</h4>
        <p class="text-gray-600">{{ hotelDetails.orderName }}</p>
        <p class="text-gray-600">{{ hotelDetails.orderPhone }}</p>
        <p class="text-gray-600">{{ hotelDetails.orderEmail }}</p>
      </div>
    </div>

    <div class="py-3 px-1 text-center">
      <p class="font-bold text-sm text-sky-600">
        Ini pilihan yang tepat untuk tepat menginapmu!
      </p>
    </div>
  </div>
</template>
