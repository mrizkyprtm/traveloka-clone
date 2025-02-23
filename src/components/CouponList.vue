<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Button } from "primevue";

const coupons = [
  {
    code: "HELLOSGCAID",
    description: "Kupon Diskon s.d Rp300rb",
    discount: "Berlaku untuk Pengguna Baru.",
  },
  {
    code: "JALANYUK",
    description: "Diskon 8% Hotel",
    discount: "min. transaksi Rp 500rb",
  },
  {
    code: "JALANYUK",
    description: "Diskon s.d 8% Experience",
    discount: "min. transaksi Rp 300rb",
  },
  {
    code: "JALANYUK",
    description: "Diskon 12% Antar Jemput Bandara",
    discount: "min. transaksi Rp 150rb",
  },
  {
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
        :slides-per-view="3"
        :space-between="10">
        <swiper-slide
          v-for="(coupon, index) in coupons"
          :key="index">
          <div
            class="bg-white rounded-lg shadow-lg flex flex-col relative my-4">
            <div class="flex gap-2 items-center px-4 pt-4 pb-2">
              <div class="wrapper-img">
                <img
                  src="/img/logo-coupon.webp"
                  alt="Logo"
                  class="mr-2" />
              </div>
              <div>
                <p class="font-bold">
                  {{ coupon.description }}
                </p>
                <p class="text-gray-600 text-sm">
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
                  class="text-gray-600 font-semibold bg-gray-100 rounded-md px-3 py-2 flex-auto text-sm">
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
.coupon-comp {
  /* background-image: url(../../../../public/img/bg-gradient.webp); */
  background-repeat: no-repeat;
  background-size: cover;

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
    @apply rounded-full bg-blue-100 border-[3px] border-transparent text-blue-500 hover:bg-blue-200 transition px-4 py-1 font-semibold text-sm;
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

.p-button-label {
  @apply font-semibold;
}
</style>
