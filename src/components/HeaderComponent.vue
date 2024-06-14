<template>
  <header class="header-content">
    <p>Notícias do universo tech</p>
    <p>{{ capitalizedDate }}</p>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

const date = ref("2024-06-13");

const formattedDate = moment(date.value).format("dddd, D [de] MMMM [de] YYYY");

// Função para capitalizar a primeira letra
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const capitalizedDate = computed(() => capitalizeFirstLetter(formattedDate));
</script>

<style scoped></style>
