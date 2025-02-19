<script setup>
import { reactive, ref } from "vue";

const bookingForm = reactive({
  fullName: "",
  email: "",
  phoneNumber: "",
  isSameAsBooker: true,
});
</script>

<template>
  <div class="w-full booking-pages">
    <div class="container mx-auto max-w-7xl p-6 flex gap-4">
      <div class="flex flex-col gap-4 w-full">
        <div class="bg-white rounded-lg shadow-md p-4">
          <h2 class="text-xl font-bold mb-4">Data Pemesan (untuk E-voucher)</h2>
          <p class="text-gray-600 mb-4">
            Isilah semua kolom dengan benar untuk memastikan kamu dapat menerima
            voucher konfirmasi pemesanan di email yang dicantumkan.
          </p>

          <form @submit.prevent="submitForm()">
            <!-- Full Name -->
            <div class="mb-4">
              <label for="fullName" class="block text-gray-700"
                >Nama Lengkap (sesuai KTP/Paspor/SIM)</label
              >
              <input
                type="text"
                id="fullName"
                v-model="bookingForm.fullName"
                name="fullName"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="Masukkan nama lengkap" />
            </div>

            <!-- Email -->
            <div class="mb-4">
              <label for="email" class="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                v-model="bookingForm.email"
                name="email"
                required
                class="mt-1 block w-full border border-gray-300 rounded-md p-2"
                placeholder="Masukkan email" />
            </div>

            <!-- Phone Number -->
            <div class="mb-4">
              <label for="phoneNumber" class="block text-gray-700"
                >Nomor Handphone</label
              >
              <div class="flex">
                <input
                  type="text"
                  class="w-1/4 border border-gray-300 rounded-md p-2"
                  value="+62"
                  readonly />
                <input
                  type="text"
                  id="phoneNumber"
                  v-model="bookingForm.phoneNumber"
                  name="phoneNumber"
                  required
                  class="w-full border border-gray-300 rounded-md p-2 ml-2"
                  placeholder="Masukkan nomor handphone" />
              </div>
            </div>

            <!-- Booking Options -->
            <div class="mb-4 flex justify-between">
              <label class="flex items-center">
                <input
                  type="radio"
                  v-model="bookingForm.isSameAsBooker"
                  name="bookingOption"
                  value="same"
                  class="mr-2" />
                <span>Sama dengan pemesan</span>
              </label>
              <label class="flex items-center">
                <input
                  type="radio"
                  v-model="bookingForm.isSameAsBooker"
                  name="bookingOption"
                  value="other"
                  class="mr-2" />
                <span>Saya memesanan untuk orang lain</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
