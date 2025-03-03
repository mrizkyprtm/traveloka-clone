<script setup>
import priceFormat from "@/utils/priceFormat";

const addons = [
  {
    name: "Asuransi Hotel",
    description:
      "Lindungi rencana menginap Anda dari pembatalan dan kejadian tak terduga lainnya.",
    price: 13000,
    details:
      "Hingga Rp500.000 per kamar per malam untuk pesanan kamar hotel yang hangus\nHingga Rp2.000.000 untuk pembatalan hotel karena alasan tertentu\nHingga Rp2.500.000 untuk kehilangan atau kerusakan bagasi dan barang pribadi\nHingga Rp30.000.000 untuk perlindungan kecelakaan\nHingga Rp3.000.000 untuk biaya pengobatan akibat kecelakaan",
  },
  {
    name: "Perlindungan Check-in",
    description:
      "Dapatkan kompensasi karena gagal check-in hotel karena kejadian yang tidak terduga (cth: penuh)",
    price: 10000,
    details: "",
  },
  {
    name: "Refund Setelah Check-in",
    description:
      "Tidak suka dengan hotel anda setelah check-in? Apa pun alasannya, pesan hotel lain saja!",
    price: 77000,
    details:
      "Kami akan mengembalikan 50% (hingga Rp 500.000) dari hotel yang anda batalkan setelah kamu memesan hotel baru.",
  },
];
</script>

<template>
  <div class="bg-white rounded-lg p-4">
    <h3 class="text-lg font-bold mb-4">Add-ons ketika Menginap</h3>

    <div v-for="addon in addons" class="bg-white rounded-lg border p-4 mb-4">
      <label class="flex items-start">
        <input type="checkbox" class="mr-2 mt-1" />
        <div class="flex-auto">
          <h3 class="font-bold">{{ addon.name }}</h3>
          <p class="text-gray-700 font-semibold">{{ addon.description }}</p>
          <p class="text-gray-500 text-sm">{{ addon.details }}</p>
        </div>
        <span class="text-orange-500 font-bold">
          {{ priceFormat(addon.price) }}
        </span>
      </label>
    </div>
  </div>
</template>
