<template>
  <header class="header-content">
    <p>{{ capitalizedDate }}</p>
    <p class="home-text" @click="onHome">Notícias do universo tech</p>

    <div @click="!user && onLogin()">
      <img :src="personIcon" />
      <div v-if="user">
        <p class="text-login">{{ user.nome }}</p>
        <p @click="user && onLogin()" id="exit-account" class="text-login">
          Sair
        </p>
      </div>
      <p v-else class="text-login">Faça login</p>
    </div>
  </header>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import personIcon from "../assets/png/people.png";

import moment from "moment";
import "moment/locale/pt-br";
import { useRouter } from "vue-router";

moment.locale("pt-br");
const formattedDate = moment().format("dddd, D [de] MMMM [de] YYYY");

const router = useRouter();
const store = useStore();

const onLogin = async () => {
  await store.dispatch("signOut");
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

const checkTokenValidity = async () => {
  try {
    await store.dispatch("validateToken");
  } catch (error) {
    console.log("");
  }
};

onMounted(() => {
  checkTokenValidity();
});

const user = computed(() => store.getters.user);
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

#exit-account {
  color: var(--secondary-color);
  transform: translateY(2px);
  font-width: bold;
}
</style>
