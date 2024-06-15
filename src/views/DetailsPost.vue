<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div class="home">
    <HeaderNewLatters :margin="0" />

    <div class="container-content">
      <DetailsNewsLetter />
      <ComentsDetails />
    </div>
  </div>
</template>

<script setup>
import HeaderNewLatters from "../components/HeaderNewLatters.vue";
import DetailsNewsLetter from "../components/DetailsNewsLetter.vue";
import ComentsDetails from "../components/ComentsDetails.vue";
</script>

<style>
.header-page {
  background-color: var(--primary-color);
  padding: 20px 0;
}
</style>
