<script setup>
import { Button } from "primevue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const modules = [Navigation];
const coupons = [
  {
    id: 1,
    code: "HELLOSGCAID",
    description: "Kupon Diskon s.d Rp300rb",
    discount: "Berlaku untuk Pengguna Baru.",
  },
  {
    id: 2,
    code: "JALANYUK",
    description: "Diskon 8% Hotel",
    discount: "min. transaksi Rp 500rb",
  },
  {
    id: 3,
    code: "JALANYUK",
    description: "Diskon s.d 8% Experience",
    discount: "min. transaksi Rp 300rb",
  },
  {
    id: 4,
    code: "JALANYUK",
    description: "Diskon 12% Antar Jemput Bandara",
    discount: "min. transaksi Rp 150rb",
  },
  {
    id: 5,
    code: "JALANYUK",
    description: "Diskon 10% Rental Mobil",
    discount: "min. transaksi Rp 500rb",
  },
];

const copyToClipboard = (code) => {
  navigator.clipboard.writeText(code).then(() => {
    alert("Kode kupon telah disalin: " + code);
  });
};
</script>
<template>
  <div class="p-6 coupon-comp">
    <div class="container mx-auto max-w-7xl px-4 xl:px-0">
      <h3 class="text-2xl font-bold mb-2 text-sky-900">Kupon Pengguna Baru</h3>
      <p class="mb-4 text-sky-900">
        Berlaku untuk Transaksi Pertama di Traveloka App
      </p>

      <swiper
        class=""
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }"
        :slides-per-view="1"
        :space-between="4"
        :breakpoints="{
          512: {
            slidesPerView: 1,
            spaceBetween: 4,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 4,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 4,
          },
        }"
        :modules="modules">
        <template v-for="coupon in coupons" :key="coupon.id">
          <swiper-slide class="px-2">
            <div
              class="bg-white rounded-lg shadow-[0px_2px_10px_0px_rgba(0,0,0,0.10)] flex flex-col relative my-4">
              <div class="flex gap-2 items-center px-4 pt-4 pb-2">
                <div class="wrapper-img">
                  <img src="/img/logo-coupon.webp" alt="Logo" class="mr-2" />
                </div>
                <div>
                  <p class="font-bold">
                    {{ coupon.description }}
                  </p>
                  <p class="text-slate-400 text-sm">
                    {{ coupon.discount }}
                  </p>
                </div>
              </div>

              <div class="flex flex-col">
                <div class="bg-coupon-item">
                  <div class="border border-dashed w-full"></div>
                </div>
                <div
                  class="flex px-4 pb-4 pt-2 justify-between items-center mt-auto gap-4">
                  <span
                    class="text-slate-600 font-semibold bg-gray-100 rounded-md px-3 py-2 flex-auto text-sm">
                    {{ coupon.code }}
                  </span>
                  <button
                    @click="copyToClipboard(coupon.code)"
                    class="copy-btn">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </swiper-slide>
        </template>
        <div
          class="swiper-button-prev bg-white shadow-[0px_4px_10px_2px] shadow-black/20 rounded-full p-4"></div>
        <div
          class="swiper-button-next bg-white shadow-[0px_4px_10px_2px] shadow-black/20 rounded-full p-4"></div>
      </swiper>

      <div class="text-center mt-4">
        <Button
          label="Book Now"
          icon="pi pi-angle-right"
          iconPos="right"
          severity="warn"
          :pt="{
            label: {
              class: 'font-semibold',
            },
          }" />
      </div>
    </div>
  </div>
</template>
<style scoped>
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  --swiper-navigation-size: 15px;
  --swiper-navigation-top-offset: 50%;
  transform: translateY(-50%);
  --swiper-navigation-sides-offset: 2px;
  --swiper-navigation-color: var(--swiper-theme-color);
}
.coupon-comp {
  /* background-image: url(../../../../public/img/bg-gradient.webp); */
  background-repeat: no-repeat;
  background-size: cover;

  /* .swiper-button-prev,
  .swiper-button-next {
    width: 40px;
    height: 40px;
    background-color: rgba(208, 226, 255, 0.8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
  } */

  .bg-coupon-item {
    background: radial-gradient(10px at right, #0000 97%, #ffffff) right / 51%
        100% no-repeat,
      radial-gradient(10px at left, #0000 97%, #ffffff) left / 51% 100%
        no-repeat;
    background-color: rgba(3, 18, 26, 0.07);
    height: 20px;
    width: 100%;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .copy-btn {
    @apply rounded-full bg-blue-100 border-[3px] border-transparent text-blue-700 hover:bg-blue-200 transition px-4 py-1 font-semibold text-sm;
  }

  .wrapper-img {
    width: 40px;
    height: 40px;
  }

  .copy-shadow {
    box-shadow: 0px 4px 10px rgba(3, 18, 26, 0.15);
  }

  .icon-img {
    width: 16px;
    height: 16px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
