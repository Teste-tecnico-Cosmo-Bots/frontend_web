<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div class="home">
    <HeaderNewLatters :margin="0" />
    <div class="container-content">
      <DetailsNewsLetter :post="postOne" :isAdmin="isAdmin" />
      <ComentsDetails
        :commentsAll="postOne?.comments"
        :postId="postId"
        :isAdmin="isAdmin"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import HeaderNewLatters from "../components/HeaderNewLatters.vue";
import DetailsNewsLetter from "../components/DetailsNewsLetter.vue";
import ComentsDetails from "../components/ComentsDetails.vue";

const route = useRoute();
const store = useStore();
const postId = route.params.id;

const getOnePosts = async () => {
  try {
    await store.dispatch("getOnePosts", { id: postId });
  } catch (error) {
    console.log("");
  }
};

onMounted(() => {
  getOnePosts();
});

const postOne = computed(() => store.getters.postOne);
const isAdmin = computed(() => store.getters.isAdmin);
</script>

<style>
.header-page {
  background-color: var(--primary-color);
  padding: 20px 0;
}
</style>
