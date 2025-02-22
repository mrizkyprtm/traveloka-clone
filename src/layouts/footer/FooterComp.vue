<script setup>
const about = [
  {
    title: "Cara Pesan",
    link: "#",
  },
  {
    title: "Hubungi Kami",
    link: "#",
  },
  {
    title: "Pusat Bantuan",
    link: "#",
  },
  {
    title: "Karier",
    link: "#",
  },
  {
    title: "Cicilan",
    link: "#",
  },
  {
    title: "Tentang Kami",
    link: "#",
  },
  {
    title: "Rilisan Fitur Terbaru",
    link: "#",
  },
];
const products = [
  {
    title: "Hotel",
    link: "#",
  },
  {
    title: "Tiket Pesawat",
    link: "#",
  },
  {
    title: "Tiket Kereta Api",
    link: "#",
  },
  {
    title: "Tiket Bus & Travel",
    link: "#",
  },
  {
    title: "Antar Jemput Bandara",
    link: "#",
  },
  {
    title: "Rental Mobil",
    link: "#",
  },
  {
    title: "JR Pass",
    link: "#",
  },
  {
    title: "Taksi",
    link: "#",
  },
  {
    title: "Xperience",
    link: "#",
  },
  {
    title: "Cruises",
    link: "#",
  },
  {
    title: "Vila",
    link: "#",
  },
  {
    title: "Apartemen",
    link: "#",
  },
  {
    title: "Asuransi",
    link: "#",
  },
  {
    title: "Internet Luar Negeri",
    link: "#",
  },
  {
    title: "TPayLater",
    link: "#",
  },
  {
    title: "Gift Voucher",
    link: "#",
  },
];
const others = [
  {
    title: "Traveloka for Corporates",
    link: "#",
  },
  {
    title: "Traveloka Affiliate",
    link: "#",
  },
  {
    title: "Blog Traveloka",
    link: "#",
  },
  {
    title: "Pemberitahuan Privasi",
    link: "#",
  },
  {
    title: "Syarat & Ketentuan",
    link: "#",
  },
  {
    title: "Daftarkan Akomodasi Anda",
    link: "#",
  },
  {
    title: "Daftarkan Bisnis Aktivitas Anda",
    link: "#",
  },
  {
    title: "Traveloka Press Room",
    link: "#",
  },
  {
    title: "Traveloka Ads",
    link: "#",
  },
  {
    title: "Vulnerability Disclosure Program",
    link: "#",
  },
  {
    title: "APAC Travel Insights",
    link: "#",
  },
];
const sosmed = [
  {
    title: "Facebook",
    icon: "pi pi-facebook",
  },
  {
    title: "Instagram",
    icon: "pi pi-instagram",
  },
  {
    title: "TikTok",
    icon: "pi pi-tiktok",
  },
  {
    title: "YouTube",
    icon: "pi pi-youtube",
  },
  {
    title: "Twitter / X",
    icon: "pi pi-twitter",
  },
  {
    title: "Telegram",
    icon: "pi pi-telegram",
  },
  {
    title: "WhatsApp",
    icon: "pi pi-whatsapp",
  },
];
</script>

<template>
  <footer class="bg-gray-900 text-white pt-8">
    <div class="container flex mx-auto px-6 py-6">
      <div class="w-1/3 px-3">
        <h4 class="font-semibold">Traveloka Clone</h4>
        <div
          class="px-4 py-3 bg-gray-800 rounded-lg w-fit inline-flex items-center space-x-2">
          <i class="pi pi-link"></i>
          <p>Jadi Partner Traveloka</p>
        </div>
        <div class="space-y-2">
          <p class="font-bold">Partner Pembayaran</p>
          <div class="grid grid-cols-4 gap-2">
            <div
              class="px-4 py-2 bg-white rounded-lg"
              v-for="i in 12">
              asd
            </div>
          </div>
        </div>
      </div>
      <!-- Links Sections -->
      <div class="flex mb-10 w-2/3 px-3">
        <div class="px-3 w-1/3 space-y-8">
          <div>
            <h6 class="text-lg font-bold mb-3">Tentang Traveloka</h6>
            <ul class="space-y-2">
              <li
                v-for="item in about"
                :key="item.title">
                <a
                  :href="item.link"
                  class="text-sm text-white/65 hover:text-white hover:underline">
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 class="text-lg font-bold mb-3">Follow kami di</h6>
            <ul class="space-y-3">
              <li
                v-for="item in sosmed"
                :key="item.title">
                <a
                  :href="item.link"
                  class="text-sm text-white/65 hover:text-white hover:underline flex items-center gap-3">
                  <i :class="item.icon"></i>
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="px-3 w-1/3">
          <h6 class="text-lg font-bold mb-3">Produk</h6>
          <ul class="space-y-2">
            <li
              v-for="item in products"
              :key="item.title">
              <a
                :href="item.link"
                class="text-sm text-white/65 hover:text-white hover:underline">
                {{ item.title }}
              </a>
            </li>
          </ul>
        </div>
        <div class="px-3 w-1/3 space-y-8">
          <div>
            <h6 class="text-lg font-bold mb-3">Lainnya</h6>
            <ul class="space-y-2">
              <li
                v-for="item in others"
                :key="item.title">
                <a
                  :href="item.link"
                  class="text-sm text-white/65 hover:text-white hover:underline">
                  {{ item.title }}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h6 class="text-lg font-bold mb-3">Download Traveloka App</h6>
            <div class="mb-3">
              <a
                href="#"
                class="opacity-65 hover:opacity-100">
                <img
                  loading="lazy"
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2_2/f/f519939e72eccefffb6998f1397901b7.svg" />
              </a>
            </div>
            <div>
              <a
                href="#"
                class="opacity-65 hover:opacity-100">
                <img
                  loading="lazy"
                  src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2_2/1/18339f1ae28fb0c49075916d11b98829.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center border-t border-gray-700 py-4">
      <p>
        Copyright &copy; {{ new Date().getFullYear() }} Traveloka. All rights
        reserved
      </p>
    </div>
  </footer>
</template>
