<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div class="content-cards-list-news">
    <div class="container-new-letter-one">
      <div class="card-new-letter-one">
        <p class="title">
          Ruby on Rails: A Framework que Revolucionou o Desenvolvimento Web....
        </p>

        <div>
          <div class="details-card-news">
            <div>
              <p class="title-card-new">Autor:</p>
              <p class="content-card-new">Lucas Alex</p>
            </div>
            <div>
              <p class="title-card-new">Comentários:</p>
              <p class="content-card-new">2 comentários</p>
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
import { useRouter } from "vue-router";

const router = useRouter();

const goToPost = (id) => {
  router.push({ path: `/post/${id}` });
};
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
