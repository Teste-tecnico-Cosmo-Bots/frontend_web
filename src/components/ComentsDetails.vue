<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div class="comment-section">
    <p class="comment-title">Comentários</p>
    <div class="comment-form">
      <textarea
        v-model="comment"
        placeholder="Digite seu comentário aqui..."
      ></textarea>
      <button @click="submitComment">Enviar</button>
    </div>
  </div>

  <!-- LISTA DE COMENTARIOS  -->
  <div class="comment" v-for="coment in props?.commentsAll" :key="coment.id">
    <div class="comment-content">
      <p class="comment-author">{{ coment?.user?.nome }}</p>
      <p class="comment-text">
        {{ coment?.content }}
      </p>
      <p class="comment-published">
        Publicado há: {{ coment?.formatted_created_at }}
      </p>

      <img
        v-if="(exist && user == coment?.user?.id) || props.isAdmin"
        :src="trashIcon"
        @click="deleteComment(coment.id)"
        class="comment-icon"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { defineProps } from "vue";
import trashIcon from "../assets/svg/trash.svg";
import { jwtDecode } from "jwt-decode";

import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  commentsAll: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

const token = localStorage.getItem("token");

const comment = ref("");

const user = computed(() => jwtDecode(token).user_id);
const exist = computed(() => token);

const submitComment = async () => {
  if (comment.value.trim()) {
    await store.dispatch("submitComment", {
      content: comment.value.trim(),
      post_id: props.postId,
    });
    comment.value = "";
    await store.dispatch("getPosts", {});
    await store.dispatch("getOnePosts", { id: props.postId });
  } else {
    alert("Por favor, digite um comentário antes de enviar.");
  }
};

const deleteComment = async (id) => {
  await store.dispatch("deleteComment", { id });
  await store.dispatch("getOnePosts", { id: props.postId });
  // await store.dispatch("getPosts", {});
};

console.log(props.isAdmin);
</script>

<style scoped>
.comment-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
  border-bottom: 1px solid #d7d7d7;
  padding-bottom: 20px;
}
.comment-title {
  font-size: 30px;
  font-weight: 700;
  color: var(--primary-color);
}
.comment-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: end;
}

.comment-form textarea {
  width: 100%;
  border: 2px solid var(--primary-color);

  resize: none;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  min-height: 100px;
  outline: none;
  transition: border-color 0.3s;
}

.comment-form button {
  padding: 15px 30px;
  border: 2px solid var(--secondary-color);
  cursor: pointer;
  background-color: var(--secondary-color);
  font-weight: 700;
  color: var(--text-one);
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: var(--text-one);
    color: var(--secondary-color);
  }
}

.comment {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.comment-content {
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.comment-author {
  font-size: 17px;
  font-weight: 700;
  color: var(--primary-color);
}

.comment-text {
  font-size: 15px;
  font-weight: 300;
  line-height: 1.3;
  color: var(--primary-color);
}

.comment-published {
  font-size: 13px;
  font-weight: 700;
  color: var(--primary-color);
}

.comment-icon {
  width: 18px;
  position: absolute;
  right: 20px;
  cursor: pointer;
}
</style>
