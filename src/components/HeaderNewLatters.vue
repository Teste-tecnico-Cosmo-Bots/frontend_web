<template>
  <div class="container-news" :style="{ 'margin-top': `${props.margin}px` }">
    <div
      class="header-title-news"
      :style="{ cursor: props.homePage && 'pointer' }"
      @click="backToHomePage"
    >
      <p>News <span>!</span></p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  margin: {
    type: Number,
    required: true,
    default: 45, // Valor padrão se não for passado
  },
  homePage: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const backToHomePage = () => {
  props.homePage && router.push({ path: "/" });
};
</script>

<style scoped>
.container-news {
  background-color: var(--primary-color);
  padding: 20px 0;
  margin: 0 0 20px;
}

.header-title-news {
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  align-items: center;
}

.header-title-news p {
  font-size: 45px;
  font-weight: 700;
  color: var(--text-one);
}

.header-title-news span {
  color: var(--secondary-color);
}
</style>
