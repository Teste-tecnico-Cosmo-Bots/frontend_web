<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div class="home">
    <div class="header-page">
      <HeaderComponent />
    </div>
    <div class="container-content content-center">
      <LoginAndRegister
        :isLogin="isLogin"
        @openLogin="login"
        @openRegister="create"
      />
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import LoginAndRegister from "../components/LoginAndRegister.vue";
import { ref } from "vue";
const isLogin = ref(true);

const login = () => {
  isLogin.value = true;
};

const create = () => {
  isLogin.value = false;
};
</script>

<style>
.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
</style>
