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

function copyToClipboard(code) {
  navigator.clipboard.writeText(code).then(() => {
    alert("Kode kupon telah disalin: " + code);
  });
}
</script>
<template>
  <div class="p-6 coupon-comp">
    <div class="container mx-auto max-w-7xl px-4 xl:px-0">
      <h2 class="text-xl font-bold mb-2">Kupon Pengguna Baru</h2>
      <p class="mb-4">Berlaku untuk Transaksi Pertama di Traveloka App</p>

      <swiper :slides-per-view="3" :space-between="10">
        <swiper-slide v-for="(coupon, index) in coupons" :key="index">
          <div class="bg-white rounded-lg shadow-lg flex flex-col relative my-4">
            <div class="flex gap-2 items-center px-4 pt-4 pb-2">
              <div class="wrapper-img">
                <img src="/img/logo-coupon.webp" alt="Logo" class="mr-2" />
              </div>
              <div>
                <span class="font-bold text-lg">
                  {{ coupon.description }}
                </span>
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
                  class="bg-blue-500 px-4 py-1 rounded-md custom-rounded font-semibold text-sm">
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
          severity="warn" />
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
    background: radial-gradient(10px at right, #0000 97%, #ffffff) right / 51% 100%
        no-repeat,
      radial-gradient(10px at left, #0000 97%, #ffffff) left / 51% 100% no-repeat;
    background-color: rgba(3, 18, 26, 0.07);
    height: 20px;
    width: 100%;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .custom-rounded {
    background-color: rgb(209, 240, 255);
    border-color: rgba(0, 0, 0, 0);
    border-radius: 999px;
    border-width: 3px;
    color: rgba(2, 69, 144, 1);
  }

  .wrapper-img {
    width: 40px;
    height: 40px;
  }

  .owl-theme .owl-nav {
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: -2%;
    width: 104%;
    bottom: 25%;

    [class*="owl-"] {
      box-shadow: rgba(3, 18, 26, 0.2) 0px 8px 16px;
      font-size: 18px;
      margin: 5px;
      padding: 0;
      background: white;
      display: inline-block;
      color: blue;
      cursor: pointer;
      border-radius: 50%;
      height: 35px;
      width: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
