<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div>
    <div class="container-details-news">
      <div>
        <p>{{ props.post?.formatted_created_at_long }}</p>
        <button
          v-if="(exist && user == props?.user?.id) || props.isAdmin"
          @click="openModal"
        >
          Editar
        </button>
      </div>
      <p class="title-details-news">
        {{ props.post?.title }}
      </p>
      <p class="description-details-news">
        {{ props.post?.description }}
      </p>
      <p class="content-details-news">
        {{ props.post?.content }}
      </p>
    </div>
  </div>
  <ModalBase :isVisible="isModalVisible" @close="closeModal">
    <CardCreatePost :create="false" @close="closeModal" :post="props.post" />
  </ModalBase>
</template>

<script setup>
import ModalBase from "../components/ModalBase.vue";
import CardCreatePost from "../components/CardCreatePost.vue";
import { defineProps, ref } from "vue";

import { computed } from "vue";
import { jwtDecode } from "jwt-decode";
const token = localStorage.getItem("token");

const user = computed(() => jwtDecode(token).user_id);
const exist = computed(() => token);

const props = defineProps({
  post: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
});

const isModalVisible = ref(false);

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<style>
.container-details-news {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.container-details-news p {
  line-height: 1.2;
}

.title-details-news {
  font-size: 20px;
  font-weight: 700;
  word-wrap: break-word;
}

.description-details-news {
  font-size: 16px;
  font-weight: 600;
  word-wrap: break-word;
}

.content-details-news {
  font-size: 14px;
}

.container-details-news div {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container-details-news div button {
  background-color: var(--secondary-color);
  color: var(--text-one);
  padding: 5px 12px;
  border: 2px solid var(--secondary-color);
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    background-color: var(--text-one);
    color: var(--secondary-color);
  }
}
</style>
