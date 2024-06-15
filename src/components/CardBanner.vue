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
        <p class="title">
          Ruby on Rails: A Framework que Revolucionou o Desenvolvimento Web
        </p>
        <p class="description">
          Conheça o Ruby on Rails, um dos frameworks mais populares e influentes
          no desenvolvimento web, e descubra como ele continua a transformar a
          maneira como desenvolvemos aplicações modernas.
        </p>
      </div>

      <div class="content-button">
        <button>Clique e saiba mais</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/svg/logo.svg";
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

.title {
  font-size: 20px;
  text-align: center;
  line-height: 1.2;
  transition: 0.2s;
}

.description {
  font-size: 14px;
  font-weight: 300;
  line-height: 1.2;
}

.content-button {
  display: flex;
  align-items: end;
}

.content-button button {
  max-width: 279px;
  width: 279px;
  padding: 20px 0;
  background-color: var(--primary-color);
  color: var(--text-one);
  border: 2px solid var(--text-one);
  cursor: pointer;
  transition: 0.3s;
  font-weight: 700;
  border-radius: 5px;
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
  background-color: var(--tertiary-color);
  color: var(--primary-color);
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
