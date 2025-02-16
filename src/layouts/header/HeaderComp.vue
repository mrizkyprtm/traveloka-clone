<script setup>
import { ref } from "vue";

const isScrolled = ref(false);
const isHomePage = ref(true);

window.addEventListener("scroll", () => {
  isScrolled.value = window.scrollY > 0;
});

if (isHomePage) {
  const offset = window.scrollY || document.documentElement.scrollTop;
  isScrolled.value = offset > 50;
}

const topMenu = [
  { label: "Promo", url: "" },
  { label: "Bantuan", url: "" },
  { label: "Jadi Mitra", url: "" },
  { label: "For Corporates", url: "" },
  { label: "Pesanan", url: "" },
];

const bottomMenu = [
  { label: "Hotel", url: "" },
  { label: "Tiket Pesawat", url: "" },
  { label: "Tiket Kereta Api", url: "" },
  { label: "Tiket Bus & Travel", url: "" },
  { label: "Antar Jemput Bandara", url: "" },
  { label: "Rental Mobil", url: "" },
  { label: "Atraksi dan Aktifitas", url: "" },
  { label: "Produk Lainnya", url: "" },
];
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full transition-all duration-300 z-50"
    :class="{
      'bg-white shadow-md text-black': isScrolled && isHomePage,
      'bg-transparent': !isScrolled && isHomePage,
    }">
    <div class="container mx-auto max-w-7xl flex flex-col px-6 pt-4">
      <div class="flex items-center justify-between mb-1 header-top">
        <div class="logo">
          <h2
            class="text-2xl font-bold cursor-pointer"
            :class="{
              'text-black': isScrolled && isHomePage,
              'text-white': !isScrolled && isHomePage,
            }">
            Traveloka Clone
          </h2>
        </div>

        <div class="flex items-center gap-4">
          <nav
            class="hidden md:flex space-x-4 text-sm"
            :class="{
              'text-black': isScrolled && isHomePage,
              'text-white': !isScrolled && isHomePage,
            }"
            aria-label="Menu utama">
            <a
              v-for="(item, index) in topMenu"
              :key="index"
              href="#"
              class="font-semibold hover:bg-black hover:bg-opacity-50 py-2 px-2 rounded"
              >{{ item.label }}</a
            >
          </nav>

          <div class="flex items-center space-x-2">
            <button
              :class="{
                'text-black border-blue-500 hover:bg-black/20':
                  isScrolled && isHomePage,
                'text-white': !isScrolled && isHomePage,
              }"
              class="border border-solid border-neutral-300 rounded-md px-4 py-2 font-semibold text-sm hover:bg-black/40">
              Log In
            </button>
            <button
              class="bg-sky-600 text-white px-4 py-2 rounded-md font-bold text-sm">
              Daftar
            </button>
          </div>
        </div>
      </div>

      <div class="space-x-4 header-bottom">
        <div class="absolute w-full line"></div>
        <nav
          class="hidden md:flex space-x-6 text-sm items-center"
          aria-label="Menu produk">
          <span v-for="(item, index) in bottomMenu" :key="index" class="flex-auto">
            <a
              href="#"
              class="py-2 px-2 font-bold hover:bg-black/10 rounded"
              :class="{
                'text-gray-700': isScrolled && isHomePage,
                'text-white': !isScrolled && isHomePage,
              }"
              >{{ item.label }}</a
            >
          </span>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  .header-bottom {
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  .line {
    content: "";
    display: flex;
    height: 45px;
    left: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    bottom: 4px;
    z-index: -1;
  }
}
</style>
