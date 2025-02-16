<script setup>
import Hero from "@/components/Hero.vue";
import PromoBanner from "@/components/PromoBanner.vue";
import CouponList from "@/components/CouponList.vue";
import TravelOptions from "@/components/TravelOptions.vue";
import DestinationCard from "@/components/DestinationCard.vue";
</script>

<template>
  <main class="bg-gray-100 min-h-screen">
    <Hero />
    <PromoBanner />
    <CouponList />
    <TravelOptions />
    <DestinationCard />
  </main>
</template>
