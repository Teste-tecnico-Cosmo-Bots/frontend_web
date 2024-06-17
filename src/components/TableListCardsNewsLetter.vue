<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div v-for="post in posts" :key="post.id" class="content-cards-list-news">
    <div class="container-new-letter-one">
      <div class="card-new-letter-one">
        <p class="title">
          {{ post.title }}
        </p>

        <div>
          <div class="details-card-news">
            <div>
              <p class="title-card-new">Autor:</p>
              <p class="content-card-new">{{ post.user.nome }}</p>
            </div>
            <div>
              <p class="title-card-new">Comentários:</p>
              <p class="content-card-new">
                {{ post.comments.length }} comentários
              </p>
            </div>

            <div>
              <p class="title-card-new">Tempo:</p>
              <p class="content-card-new">20 minutos atrás</p>
            </div>

            <div>
              <p class="title-card-new">Curtidas:</p>
              <p class="content-card-new">14 curtidas</p>
            </div>
          </div>
        </div>
      </div>
      <button @click="goToPost(1)">Veja mais</button>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();

const goToPost = (id) => {
  router.push({ path: `/post/${id}` });
};

const getAllPosts = async () => {
  try {
    await store.dispatch("getPosts");
  } catch (error) {
    console.log("");
  }
};

onMounted(() => {
  getAllPosts();
});

const posts = computed(() => store.getters.posts);
</script>

<style>
.content-cards-list-news {
  margin: 60px 0;
}

.container-new-letter-one {
  width: 100%;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;

  transition: 0.8s;

  &:hover {
    transform: scale(1.01);
    animation: colorCycle 8s infinite;
  }
}

.container-new-letter-one button {
  background-color: var(--text-one);
  border: 1px solid var(--primary-color);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--primary-color);
    color: var(--text-one);
  }
}

.card-new-letter-one {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card-new-letter-one .title {
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.details-card-news {
  display: flex;
  gap: 25px;
}

.details-card-news div {
  display: flex;
  gap: 10px;
  align-items: center;
}

.title-card-new {
  font-size: 14px;
  font-weight: 700;
}

.content-card-new {
  font-size: 13px;
}
</style>
