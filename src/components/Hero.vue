<script setup>
const menuItems = [
  {
    label: "Hotel",
    url: "",
    path: "icon/hotel.png",
    isActive: true,
  },
  {
    label: "Tiket Pesawat",
    url: "",
    path: "icon/air-plane.png",
    isActive: false,
  },
  {
    label: "Tiket Kreta Api",
    url: "",
    path: "icon/train.png",
    isActive: false,
  },
  {
    label: "Tiket Bus & Travel",
    url: "",
    path: "icon/train.png",
    isActive: false,
  },
  {
    label: "Antar Jemput Bandara",
    url: "",
    path: "icon/car.png",
    isActive: false,
  },
  {
    label: "Rental Mobil",
    url: "",
    path: "icon/car.png",
    isActive: false,
  },
  {
    label: "Atraksi dan Aktifitas",
    url: "",
    path: "icon/car.png",
    isActive: false,
  },
  {
    label: "Lainnya",
    url: "",
    path: "icon/car.png",
    isActive: false,
  },
];
</script>

<template>
  <section class="relative hero pt-12">
    <div class="relative from-blue-900 to-transparent pt-10">
      <div
        class="container mx-auto max-w-7xl px-6 xl:px-0 py-12 text-white flex flex-col">
        <h1 class="text-3xl font-bold mx-auto text-white leading-[56px]">
          Wujudkan Perjalananmu dengan Caramu
        </h1>
        <div class="bg-transparent rounded-lg mt-6 p-6 text-white box-border">
          <div
            class="flex items-center justify-between space-x-2 border-b-2 border-solid pb-4 box-border text-gray-300">
            <template
              v-for="(item, index) of menuItems"
              :key="index">
              <button
                class="rounded-3xl text-black flex flex-col justify-center items-center gap-2 px-6 py-2 h-full mh-80"
                :class="{
                  'bg-white text-black': item.isActive,
                  'hover:outline hover:outline-1 hover:outline-white':
                    !item.isActive,
                }">
                <span class="icon">
                  <img
                    :src="item.path"
                    :alt="item.label" />
                </span>
                <span
                  class="font-bold"
                  :class="{
                    'text-black': item.isActive,
                    'text-gray-300': !item.isActive,
                  }">
                  {{ item.label }}
                </span>
              </button>
            </template>

            <!-- <button class="py-2 px-4 rounded-3xl hover:border hover:border-solid flex flex-col justify-center gap-2">
            <span class="icon">
              <img src="icon/train.png" alt="">
            </span>
            <span class="font-bold">
              Tiket Kereta Api
            </span>
          </button> -->
          </div>

          <div class="flex flex-row justify-between items-center pt-6">
            <div class="flex gap-4 font-bold">
              <button
                class="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600">
                Hotel
              </button>
              <button
                class="bg-black/30 text-white px-4 py-1 rounded-full hover:bg-black/50">
                Villa
              </button>
              <button
                class="bg-black/30 text-white px-4 py-1 rounded-full hover:bg-black/50">
                Apartemen
              </button>
            </div>

            <!-- <div class="flex gap-4 items-center right-form">
              <div class="text-gray-700 bg-transparent bg-opacity-50 w-rp">
                <select
                  class="border border-white rounded-md shadow-sm p-2 bg-opacity-50">
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
              <div class="text-gray-700 bg-gray bg-opacity-50 w-rp">
                <select
                  class="border border-white rounded-md shadow-sm p-2 bg-opacity-50">
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
            </div> -->
          </div>

          <div class="flex justify-between gap-4">
            <div
              class="mt-6 grid grid-cols-1 md:grid-cols-3 mr-2 flex-auto wrapper-form">
              <div>
                <label
                  for="place"
                  class="block text-sm font-semibold mb-2 text-white">
                  Kota, tujuan, atau nama hotel
                </label>
                <input
                  id="place"
                  type="text"
                  placeholder="Lembang"
                  class="w-full p-3 border bg-white input-1" />
              </div>
              <div>
                <label
                  for="check-in"
                  class="block text-sm font-semibold mb-2 text-white">
                  Tanggal Check-in & Check-out
                </label>
                <input
                  id="check-in"
                  type="text"
                  placeholder="24 Jan 2025 - 25 Jan 2025"
                  class="w-full p-3 border bg-white input-2" />
              </div>
              <div>
                <label
                  for="capacity"
                  class="block text-sm font-semibold mb-2 text-white">
                  Tamu dan Kamar
                </label>
                <div class="wrapper-input relative">
                  <input
                    id="capacity"
                    type="text"
                    placeholder="1 Dewasa, 0 Anak, 1 Kamar"
                    class="w-full p-3 border bg-white input-3" />
                  <button
                    class="absolute bg-orange-500 text-white btn-search"
                    @click="$router.push('/hotel')">
                    <i class="pi pi-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-image: url(/img/bg.webp);
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 600px;

  .icon {
    height: 30px;
    width: 30px;
    display: block;
    /* margin: auto; */

    img {
      height: 100%;
      width: 100%;
    }
  }

  .right-form {
    width: 400px;
    .w-rp {
      flex: 1 1 auto;

      select {
        color: white;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.25);
      }
    }
  }

  .btn-search {
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .wrapper-form {
    input {
      outline: none;
      color: black;
    }

    .input-1,
    .input-3 {
      border: 3px solid rgb(171, 170, 170);
    }
    .input-1 {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    .input-2 {
      border-top: 3px solid rgb(171, 170, 170);
      border-bottom: 3px solid rgb(171, 170, 170);
    }
    .input-3 {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      overflow: hidden;
    }
  }

  .mh-80 {
    min-height: 80px;
  }
}
</style>
