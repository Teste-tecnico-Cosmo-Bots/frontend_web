<template>
  <div class="container-sub">
    <div class="content-sub">
      <p class="title-sub">
        {{ limitText(postsOne?.title, 55) }}
      </p>
      <p class="description-sub">
        {{ limitText(postsOne?.description, 86) }}
      </p>
      <div class="container-button">
        <img :src="attentionIcon" />
        <button @click="goToPost(postsOne.id)">Clique e saiba mais</button>
      </div>
    </div>

    <div class="content-sub">
      <p class="title-sub">
        {{ limitText(postsTwo?.title, 55) }}
      </p>
      <p class="description-sub">
        {{ limitText(postsTwo?.description, 86) }}
      </p>
      <div class="container-button">
        <img :src="attentionIcon" />
        <button @click="goToPost(postsTwo.id)">Clique e saiba mais</button>
      </div>
    </div>

    <div class="content-sub">
      <p class="title-sub">
        {{ limitText(postsThree?.title, 55) }}
      </p>
      <p class="description-sub">
        {{ limitText(postsThree?.description, 86) }}
      </p>
      <div class="container-button">
        <img :src="attentionIcon" />
        <button @click="goToPost(postsThree.id)">Clique e saiba mais</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import attentionIcon from "../assets/svg/attention.svg";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { limitText } from "../utils/String.js";

const router = useRouter();
const store = useStore();

const postsOne = computed(() => store.getters.posts[0]);
const postsTwo = computed(() => store.getters.posts[1]);
const postsThree = computed(() => store.getters.posts[2]);

const goToPost = (id) => {
  router.push({ path: `/post/${id}` });
};
// import logo from "../assets/svg/logo.svg";
</script>

<style scoped>
.container-sub {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.content-sub {
  width: 300px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: var(--gray);
  padding: 20px 12px;
  border: 1px solid transparent;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 2px var(--primary-color);
  transition: 0.3s;
  justify-content: space-between;

  &:hover {
    transform: scale(1.01);
    animation: colorCycle 2s infinite;
  }
}

.title-sub {
  font-size: 15px;
  text-align: center;
  line-height: 1.2;
  font-weight: 700;
  color: var(--primary-color);
  word-wrap: break-word;
}
.description-sub {
  font-size: 13px;
  line-height: 1.2;
  color: var(--primary-color);
  word-wrap: break-word;
}

.container-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
}

.container-button button {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--primary-color);
  cursor: pointer;
  width: 100%;
  transition: 0.3s;

  &:hover {
    background-color: var(--primary-color);
    color: var(--text-one);
    transition: 0.3s;
  }
}
</style>
