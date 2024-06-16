<template>
  <header class="header-content">
    <p>{{ capitalizedDate }}</p>
    <p class="home-text" @click="onHome">Notícias do universo tech</p>

    <div @click="onLogin">
      <img :src="personIcon" />
      <p class="text-login">Faça login</p>
    </div>
  </header>
</template>

<script setup>
import { computed } from "vue";
import personIcon from "../assets/png/people.png";
import moment from "moment";
import "moment/locale/pt-br";
import { useRouter } from "vue-router";
moment.locale("pt-br");
const formattedDate = moment().format("dddd, D [de] MMMM [de] YYYY");

const router = useRouter();

const onLogin = () => {
  router.push({ path: "/login" });
};

const onHome = () => {
  router.push({ path: "/" });
};

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
  align-items: center;
}

.header-content p {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-one);
}

.header-content img {
  width: 20px;
}

.header-content div {
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
}

.text-login {
  transform: translateY(2px);
}

.home-text {
  cursor: pointer;
  transform: translateX(-15px);
}
</style>
