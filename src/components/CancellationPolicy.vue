<script setup>
const description = "Kamu mendapatkan kamar dengan harga terbaik dari pilihan ini!";
const policies = ["Pemesanan ini tidak bisa di-refund.", "Non-reschedulable"];
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-4 mb-4">
    <h3 class="font-bold mb-2">
      <i class="pi pi-info-circle text-orange-500 mr-2"></i>
      Kebijakan Pembatalan dan Reschedule
    </h3>
    <div class="bg-gray-100 px-4 py-3 mb-4 rounded-lg">
      <p class="text-gray-600 text-sm">{{ description }}</p>
    </div>

    <ul class="list-disc">
      <li v-for="policy in policies" class="flex items-center mb-1">
        <svg
          class="w-4 h-4 text-green-500 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path d="M10 15l-5-5h10l-5 5z" />
        </svg>
        <span class="font-bold text-gray-600">{{ policy }}</span>
      </li>
    </ul>
  </div>
</template>
