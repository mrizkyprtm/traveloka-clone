<script setup>
import AccomodationPolicy from "@/components/AccomodationPolicy.vue";
import AddOn from "@/components/AddOn.vue";
import BookingCard from "@/components/BookingCard.vue";
import CancellationPolicy from "@/components/CancellationPolicy.vue";
import { Button } from "primevue";
import { reactive } from "vue";

const bookingForm = reactive({
  fullName: "",
  email: "",
  phoneNumber: "",
  isSameAsBooker: true,
});

const priceBreakdown = {
  roomDescription: "(1x) Superior King Bed (1 malam)",
  roomPrice: 368569,
  taxAndFees: 81454,
  totalPrice: 450023,
};

const proceedToPayment = () => {
  console.log("proceed to payment");
};
</script>

<template>
  <div class="w-full booking-pages">
    <div class="container mx-auto max-w-7xl p-6 gap-4">
      <h1 class="text-2xl font-bold mb-2">Pemesanan Akomodasi</h1>
      <p class="text-gray-600 mb-6">
        Pastikan kamu mengisi semua informasi di halaman ini dengan benar sebelum
        melanjutkan ke pembayaran.
      </p>
      <div class="flex gap-4">
        <div class="flex flex-col gap-4 w-2/3">
          <div class="bg-white rounded-lg shadow-md p-4">
            <h2 class="text-xl font-bold mb-4">Data Pemesan (untuk E-voucher)</h2>
            <p class="text-gray-600 mb-4">
              Isilah semua kolom dengan benar untuk memastikan kamu dapat menerima
              voucher konfirmasi pemesanan di email yang dicantumkan.
            </p>

            <form @submit.prevent="submitForm()">
              <!-- Full Name -->
              <div class="mb-4">
                <label for="fullName" class="block text-gray-700 font-semibold">
                  Nama Lengkap (sesuai KTP/Paspor/SIM)
                </label>
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
                <label for="email" class="block text-gray-700 font-semibold"
                  >Email</label
                >
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
                <label for="phoneNumber" class="block text-gray-700 font-semibold">
                  Nomor Handphone
                </label>
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
              <div class="mb-4 flex gap-x-6">
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
              <div v-if="bookingForm.isSameAsBooker === 'other'" class="mb-4">
                <label for="name" class="block font-semibold text-gray-700"
                  >Nama Lengkap Tamu</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  class="mt-1 w-full border border-gray-300 rounded-md p-2"
                  placeholder="Masukkan nama lengkap tamu" />
              </div>
            </form>
          </div>

          <!-- Special Requests Card -->
          <div class="bg-white rounded-lg shadow-md p-4">
            <h3 class="text-lg font-bold mb-2">
              Beri tahu di sini jika ada permintaan khusus
            </h3>
            <p class="text-gray-600 mb-4">
              Ketersediaan permintaanmu akan diinformasikan pada waktu check-in.
              Blaya tambahan mungkin akan dikenakan tapi kamu masih bisa
              membatalkannya nanti.
            </p>

            <div class="grid grid-cols-2 gap-4">
              <label class="flex items-center">
                <input type="checkbox" class="mr-2" />
                Kamar Bebas Asap Rokok
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-2" />
                Kamar dengan Pintu Penghubung
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-2" />
                Lantai Atas
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-2" />
                Tipe Ranjang
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-2" />
                Waktu check-in
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-2" />
                Waktu check-out
              </label>
              <label class="flex items-center">
                <input type="checkbox" class="mr-2" />
                Lainnya
              </label>
            </div>
          </div>

          <!-- Addons Card -->
          <AddOn></AddOn>

          <!-- price detail -->
          <div class="bg-white rounded-lg shadow-md p-4">
            <h2 class="text-xl font-bold mb-4">Rincian Harga</h2>
            <p class="text-blue-500 mb-4">
              Login sekarang dan nikmati kupon khusus pengguna baru kami, kamu bisa
              hemat hingga Rp1.000.000 pada pemesanan pertama.
            </p>

            <div class="mb-4">
              <p class="flex justify-between">
                <span>Harga Kamar</span>
                <span>
                  Rp
                  {{ Intl.NumberFormat("id-ID").format(priceBreakdown.roomPrice) }}
                </span>
              </p>
              <p class="flex justify-between">
                <span>{{ priceBreakdown.roomDescription }}</span>
              </p>
            </div>

            <div class="mb-4">
              <p class="flex justify-between">
                <span>Pajak dan Biaya</span>
                <span
                  >Rp
                  {{
                    Intl.NumberFormat("id-ID").format(priceBreakdown.taxAndFees)
                  }}</span
                >
              </p>
            </div>

            <div class="border-t border-gray-300 mt-4 pt-2">
              <p class="flex justify-between font-bold">
                <span>Harga Total</span>
                <span
                  >Rp
                  {{
                    Intl.NumberFormat("id-ID").format(priceBreakdown.totalPrice)
                  }}</span
                >
              </p>
            </div>

            <p class="text-orange-500 text-sm my-4">
              Kamu tidak perlu bayar apa pun sekarang!
            </p>

            <Button
              label="Lanjut ke Pembayaran"
              severity="warn"
              fluid
              @click="proceedToPayment" />

            <div class="flex-auto flex w-1/2 mx-auto flex-col gap-4 mt-4">
              <p class="text-sm text-center">
                Dengan lanjut ke pembayaran, kamu menyetujui
                <a class="underline text-blue-600" href="#">Syarat dan ketentuan</a>,
                <a class="underline text-blue-600" href="#">Kebijakan Privasi</a> dan
                <a class="underline text-blue-600" href="#"
                  >Prosedur Refund Akomodasi</a
                >
                dari Traveloka.
              </p>
            </div>
          </div>
        </div>
        <div class="w-1/3 space-y-4">
          <BookingCard />
          <CancellationPolicy />
          <AccomodationPolicy />
        </div>
      </div>
    </div>
  </div>
</template>
