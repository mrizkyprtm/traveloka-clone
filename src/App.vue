<script setup>
import { RouterView } from "vue-router";
import HeaderComp from "./layouts/header/HeaderComp.vue";
import FooterComp from "./layouts/footer/FooterComp.vue";
</script>

<template>
  <HeaderComp />
  <RouterView />
  <FooterComp />
</template>

<style scoped></style>
