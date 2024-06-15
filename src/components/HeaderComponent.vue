<template>
  <header class="header-content">
    <p>Notícias do universo tech</p>
    <p>{{ capitalizedDate }}</p>
  </header>
</template>

<script setup>
import { computed } from "vue";
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

const formattedDate = moment().format("dddd, D [de] MMMM [de] YYYY");

// Função para capitalizar a primeira letra
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const capitalizedDate = computed(() => capitalizeFirstLetter(formattedDate));
</script>

<style scoped>
.header-content {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
}

.header-content p {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-one);
}
</style>
