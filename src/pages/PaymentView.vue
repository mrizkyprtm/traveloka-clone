<script setup>
import HotelDetails from "@/components/HotelDetails.vue";
import PaymentMethod from "@/components/PaymentMethod.vue";
import priceFormat from "@/utils/priceFormat";
import { Button } from "primevue";
import { ref } from "vue";

const paymentOptions = [
  {
    name: "Virtual Account",
    description: "BCA, Mandiri, BRIVA, BNI",
    isNew: true,
  },
  { name: "Transfer Bank", description: "", isNew: false },
  { name: "Kartu Kredit/Debit", description: "", isNew: false },
  { name: "Minimarket", description: "", isNew: false },
];

const totalPrice = 660000;
const couponCode = ref("");

const applyCoupon = () => {
  // Logic to apply coupon
  console.log("Applying coupon:", couponCode.value);
};

const proceedToPayment = () => {
  // Logic to proceed to payment
  console.log("Proceeding to payment...");
};
</script>

<template>
  <section class="payment-pages">
    <div class="container mx-auto max-w-6xl flex gap-4 p-6">
      <div class="flex flex-col gap-4 w-2/3">
        <PaymentMethod />

        <div class="bg-white rounded-lg p-4">
          <h3 class="font-semibold">Pakai Kupon</h3>
          <input
            type="text"
            v-model="couponCode"
            placeholder="Masukkan kode kupon"
            class="border border-gray-300 rounded-md p-2 w-full mt-2" />
          <Button
            class="mt-2"
            label="Terapkan"
            severity="info"
            :pt="{
              label: {
                class: 'font-semibold',
              },
            }"
            @click="applyCoupon" />
        </div>

        <div class="bg-white rounded-lg p-4 flex flex-col gap-4">
          <div class="w-full flex justify-between font-bold text-lg">
            <h3>Harga Total</h3>
            <p>{{ priceFormat(totalPrice) }}</p>
          </div>

          <div class="w-full">
            <Button
              label="Bayar dengan Kartu Kredit/Debit"
              severity="warn"
              fluid
              :pt="{
                label: {
                  class: 'font-semibold',
                },
              }"
              @click="proceedToPayment" />
            <p class="text-sm text-center mt-2">
              Dengan lanjut membayar, kamu menyetujui
              <a href="#" class="text-sky-500 hover:underline"
                >Syarat & Ketentuan</a
              >
              dan
              <a href="#" class="text-sky-500 hover:underline"
                >Kebijakan Privasi Traveloka</a
              >.
            </p>
          </div>
        </div>
      </div>
      <div class="flex-1 w-1/3">
        <HotelDetails />
      </div>
    </div>
  </section>
</template>
