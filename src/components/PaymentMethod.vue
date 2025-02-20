<script setup>
import { ref } from "vue";

const payment = [
  {
    name: "Cicilan Kartu Kredit",
  },
  {
    name: "Virtual Account",
    sub: [
      { name: "BCA Virtual Account", description: "BCA", isNew: true },
      { name: "Mandiri Virtual Account", description: "mandiri", isNew: false },
      { name: "BRI Virtual Account", description: "BRIVA", isNew: false },
      { name: "BNI Virtual Account", description: "BNI", isNew: false },
      {
        name: "CIMB Niaga Virtual Account",
        description: "CIMB NIAGA",
        isNew: true,
      },
      { name: "Virtual Account lainnya", description: "", isNew: false },
    ],
  },
  {
    name: "Transfer Bank",
    sub: [{ name: "Transfer Bank", description: "", isNew: false }],
  },
  {
    name: "Kartu Kredit/Debit",
    sub: [{ name: "Kartu Kredit/Debit", description: "", isNew: false }],
  },
  {
    name: "Minimarket",
    sub: [
      { name: "Alfamart", description: "", isNew: false },
      { name: "Indomaret", description: "", isNew: false },
    ],
  },
];

const selectedMethod = ref("");

const selectMethod = (method) => {
  selectedMethod.value = method;
};
</script>

<template>
  <div class="bg-white rounded-lg">
    <div class="bg-sky-600 py-5 rounded-t-lg mb-4">
      <p class="text-white text-center">
        Tenang, harganya tidak akan berubah. Yuk selesaikan pembayaran dalam
        <span class="font-bold">00:15:37</span>
      </p>
    </div>

    <div class="py-4 px-6">
      <h2 class="text-2xl font-bold mb-4 text-[#03121A]">
        Mau bayar pakai metode apa?
      </h2>

      <div class="divide-y divide-gray-200">
        <template v-for="method of payment">
          <div class="block py-4">
            <input
              type="radio"
              v-model="selectedMethod"
              :value="method.name"
              :id="method.name"
              name="paymentMethod"
              class="mr-2" />
            <label
              :for="method.name"
              class="font-semibold"
              :class="{
                'text-sky-600 !font-bold text-lg':
                  selectedMethod === method.name,
              }">
              {{ method.name }}
            </label>

            <div
              class="mt-4 space-y-4"
              v-if="selectedMethod === method.name">
              <template v-for="sub in method.sub">
                <div class="ml-6">
                  <input
                    type="radio"
                    :id="sub?.name"
                    name="paymentMethod2"
                    class="mr-2" />
                  <label :for="sub?.name">{{ sub?.name }}</label>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
