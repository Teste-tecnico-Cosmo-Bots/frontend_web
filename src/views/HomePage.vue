<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div class="home">
    <div class="header-page">
      <HeaderComponent />
    </div>
    <div class="container-content">
      <CardBanner />
    </div>
    <h1>Bem-vindo à Página Inicial</h1>
    <p>Esta é a página inicial do meu aplicativo Vue com Vue Router!</p>
  </div>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import CardBanner from "../components/CardBanner.vue";
</script>

<style>
.header-page {
  background-color: var(--primary-color);
  padding: 20px 0;
}

.header-content {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
}

.header-content p {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-one);
}
</style>
