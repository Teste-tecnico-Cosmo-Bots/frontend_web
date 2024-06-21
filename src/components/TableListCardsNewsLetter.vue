<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div class="container-general-card-new">
    <div v-for="post in posts" :key="post.id" class="content-cards-list-news">
      <div class="container-new-letter-one">
        <div class="button-new-letter-one">
          <button @click="goToPost(post.id)">Veja mais</button>
        </div>
        <div class="card-new-letter-one">
          <p class="title">
            {{ limitText(post.title, 85) }}
          </p>
          <p class="content">
            {{ limitText(post.description, 267) }}
          </p>

          <div>
            <div class="details-card-news">
              <div>
                <img :src="userIcon" />
                <p class="content-card-new">{{ post.user.nome }}</p>
              </div>
              <div>
                <img :src="commentIcon" />
                <p class="content-card-new">
                  {{
                    post.comments.length > 1
                      ? post.comments.length + " comentários"
                      : post.comments.length + " comentário"
                  }}
                </p>
              </div>

              <div>
                <p class="content-card-new">{{ post.formatted_created_at }}</p>
              </div>

              <div>
                <img :src="likeIcon" />
                <p class="content-card-new">{{ post.like.length }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { limitText } from "../utils/String.js";
import { useStore } from "vuex";

import { useRouter } from "vue-router";
import userIcon from "../assets/png/userIcon.png";
import commentIcon from "../assets/png/commentIcon.png";
import likeIcon from "../assets/png/likeIcon.png";

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
.container-general-card-new {
  margin: 35px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.container-new-letter-one {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 1px 1px 1px 1px #d7d7d760;
  transition: 0.3s;

  &:hover {
    transform: scale(1.02);
    border: 1px solid var(--text-opacity);
    box-shadow: 1px 1px 1px 1px var(--text-opacity);
  }
}

.button-new-letter-one {
  display: flex;
  justify-content: flex-end;
}

.button-new-letter-one button {
  background-color: var(--secondary-color);
  padding: 5px 13px;
  font-weight: 700;
  border: 2px solid var(--secondary-color);
  color: var(--text-one);
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--text-one);
    color: var(--secondary-color);
  }
}

.card-new-letter-one .title {
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--title-gray);
}

.card-new-letter-one .content {
  font-size: 15px;
  white-space: pre-wrap;
  margin-top: 15px;
  color: var(--content-gray);
  line-height: 1.3;
}

.details-card-news {
  display: flex;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 2px solid var(--gray);
  justify-content: space-between;
}

.details-card-news div {
  display: flex;
  gap: 10px;
  align-items: center;
}

.details-card-news div img {
  width: 18px;
}

.details-card-news div p {
  font-size: 13px;
  color: var(--text-opacity);
  font-weight: 700;
}
</style>
