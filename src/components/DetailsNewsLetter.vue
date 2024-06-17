<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div>
    <div class="container-details-news">
      <p>{{ props.post?.formatted_created_at_long }}</p>
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
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  post: {
    type: String,
    required: true,
  },
});
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
}

.description-details-news {
  font-size: 16px;
  font-weight: 600;
}

.content-details-news {
  font-size: 14px;
}
</style>
