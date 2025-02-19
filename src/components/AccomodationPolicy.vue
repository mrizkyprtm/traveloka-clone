<script setup>
const policies = [
  {
    title: "Kebijakan Usia Minimum",
    description:
      "Usia minimum untuk check-in adalah 18 Anak-anak harus didampingi orang dewasa saat check-in.",
  },
  {
    title: "Sarapan Tambahan",
    description: "Sarapan tambahan dikenakan biaya IDR 250,000/tamu.",
  },
];
</script>
<template>
  <div class="bg-white rounded-lg shadow-md p-4 mb-4">
    <h3 class="font-bold mb-4">
      <i class="pi pi-info-circle text-orange-500 mr-2"></i>
      Kebijakan Akomodasi
    </h3>

    <ul class="list-disc">
      <li v-for="policy in policies" class="flex">
        <i class="pi pi-user mr-4 pt-1"></i>
        <div class="mb-4 space-y-2">
          <span class="font-bold">{{ policy.title }}</span>
          <p class="text-gray-600">{{ policy.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
