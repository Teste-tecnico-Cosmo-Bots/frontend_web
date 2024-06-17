<template>
  <div>
    <img :src="logo" />
  </div>

  <div class="container">
    <div class="new-card">
      <p>Novo</p>
    </div>
    <div class="card-new-letter">
      <div class="content">
        <p class="title-new">
          {{ limitText(posts?.title, 100) }}
        </p>
        <p class="description-new">
          {{ limitText(posts?.description, 200) }}
        </p>
      </div>

      <div class="content-button">
        <button @click="goToPost(posts.id)">Clique e saiba mais</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/svg/logo.svg";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { limitText } from "../utils/String.js";

const router = useRouter();
const store = useStore();

const posts = computed(() => store.getters.posts[0]);

const goToPost = (id) => {
  router.push({ path: `/post/${id}` });
};
</script>

<style scoped>
.container-content {
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 20px;
}

.card-new-letter {
  background-color: var(--primary-color);
  border-radius: 5px;
  padding: 30px 0;
  margin-top: 20px;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content-button {
  width: 100%;
}

.card-new-letter div {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card-new-letter div p {
  color: var(--text-one);
}

.content-button {
  display: flex;
  align-items: end;
}

.title-new {
  font-size: 20px;
  text-align: center;
  line-height: 1.2;
  transition: 0.2s;
  word-wrap: break-word;
}

.description-new {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.2;
  word-wrap: break-word;
}

.content-button button {
  max-width: 250px;
  width: 250px;
  padding: 15px 0;
  background-color: var(--primary-color);
  color: var(--text-one);
  border: 2px solid var(--text-one);
  cursor: pointer;
  transition: 0.3s;
  font-weight: 700;
  border-radius: 5px;
  margin-top: 10px;
}

.content-button button:hover {
  background-color: var(--text-one);
  transition: 0.3s;
  color: var(--text-two);
}

.container {
  position: relative;
}

.new-card {
  position: absolute;
  background-color: var(--secondary-color);
  color: var(--text-one);
  border-radius: 5px;
  padding: 8px 10px;
}

.new-card p {
  font-weight: 800;
  font-size: 15px;
}

.card-new-letter {
  &:hover {
    .title {
      transition: 0.2s;
      transform: scale(1.02);
    }
  }
}
</style>
