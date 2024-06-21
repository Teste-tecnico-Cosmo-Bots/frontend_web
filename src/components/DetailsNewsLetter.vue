<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div>
    <div class="container-details-news">
      <div>
        <p>{{ props.post?.formatted_created_at_long }}</p>
        <button
          v-if="(exist && user == props?.post?.user_id) || props.isAdmin"
          @click="openModal"
        >
          Editar
        </button>
      </div>
      <p class="title-details-news">
        {{ props.post?.title?.trim() }}
      </p>
      <p class="description-details-news">
        {{ props.post?.description?.trim() }}
      </p>
      <p class="content-details-news">
        {{ props.post?.content?.trim() }}
      </p>
    </div>

    <div class="container-like">
      <p>Gostou da publicação?</p>
      <img
        @click="submitLike"
        :src="currentImage"
        @mouseover="onnerLike ? switchImage(false) : switchImage(true)"
        @mouseleave="onnerLike ? switchImage(true) : switchImage(false)"
      />
    </div>
  </div>
  <ModalBase :isVisible="isModalVisible" @close="closeModal">
    <CardCreatePost :create="false" @close="closeModal" :post="props.post" />
  </ModalBase>
</template>

<script setup>
import ModalBase from "../components/ModalBase.vue";
import CardCreatePost from "../components/CardCreatePost.vue";
import offLike from "../assets/png/offLike.png";
import onLike from "../assets/png/onLike.png";
import { defineProps, ref } from "vue";

import { useStore } from "vuex";
import { computed, watch } from "vue";
import { useToast } from "vue-toastification";

import { useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem("token");
const currentImage = ref(offLike);
const user = token ? computed(() => jwtDecode(token).user_id) : null;
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
const onnerLike = ref(false);
const store = useStore();

const router = useRouter();
const toast = useToast();

const openModal = () => {
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

const switchImage = (isHover) => {
  currentImage.value = isHover ? onLike : offLike;
};

const verifyOnnerLike = (likes) => {
  const userId = token ? jwtDecode(token).user_id : null;
  const onner = likes?.find((elem) => elem.user_id === userId);
  onner ? (currentImage.value = onLike) : (currentImage.value = offLike);
  onnerLike.value = onner ?? false;
};

const submitLike = async () => {
  if (!token) {
    toast.warning("Faça o login para interagir com as publicações");
    router.push("/login");
    return false;
  } else {
    const postId = props.post.id;
    await store.dispatch("submitToggleLike", {
      post_id: postId,
    });

    await store.dispatch("getOnePosts", { id: postId });
  }
};

// Use Effect do react
watch(props, (newValue) => {
  verifyOnnerLike(newValue.post.like);
});
</script>

<style>
.container-details-news {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.container-details-news div p {
}

.title-details-news {
  font-size: 20px;
  font-weight: 700;
  word-wrap: break-word;
}

.description-details-news {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  word-wrap: break-word;
}

.content-details-news {
  font-size: 14px;
  line-height: 1.5;
  white-space: pre-wrap;
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

.container-like {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.container-like p {
  transform: translateY(3px);
  font-weight: bold;
}

.container-like img {
  width: 30px;
  cursor: pointer;
  transition: 0.1s;
}
</style>
