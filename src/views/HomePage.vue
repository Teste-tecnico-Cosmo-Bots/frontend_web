<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div class="home">
    <div class="header-page">
      <HeaderComponent />
    </div>
    <div class="container-content container-vh">
      <CardBanner />

      <SubCards />
    </div>
    <HeaderNewLatters />
    <div class="container-content container-vh2">
      <div class="publish-post">
        <button @click="openModal">Fazer publicação</button>
      </div>
      <TableListCardsNewsLetter />
      <ModalBase :isVisible="isModalVisible" @close="closeModal">
        <CardCreatePost :create="true" />
      </ModalBase>
    </div>
  </div>
</template>

<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import CardBanner from "../components/CardBanner.vue";
import SubCards from "../components/SubCards.vue";

import HeaderNewLatters from "../components/HeaderNewLatters.vue";
import TableListCardsNewsLetter from "../components/TableListCardsNewsLetter.vue";
import ModalBase from "../components/ModalBase.vue";

import CardCreatePost from "../components/CardCreatePost.vue";

import { ref } from "vue";
const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<style>
.header-page {
  background-color: var(--primary-color);
  padding: 20px 0;
}

.container-content {
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 20px;
}

.container-vh {
  min-height: 90vh;
}

.container-vh2 {
  min-height: 80vh;
}

.publish-post {
  display: flex;
  justify-content: end;
  width: 100%;
}

.publish-post button {
  padding: 10px 20px;
  border: 2px solid var(--secondary-color);
  border-radius: 5px;
  color: var(--secondary-color);
  font-weight: 700;
  background-color: var(--text-one);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--text-one);
  }
}
</style>
