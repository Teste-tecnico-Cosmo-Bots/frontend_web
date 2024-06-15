<template>
  <div class="container-sub">
    <div class="content-sub">
      <p class="title-sub">
        Ruby on Rails: A Framework que Revolucionou o Desenvolvimento Web
      </p>
      <p class="description-sub">
        Conheça o Ruby on Rails, um dos frameworks mais populares e influentes
        no desenvolvimento...
      </p>
      <div class="container-button">
        <img :src="attentionIcon" />
        <button>Clique e saiba mais</button>
      </div>
    </div>

    <div class="content-sub">
      <p class="title-sub">
        Ruby on Rails: A Framework que Revolucionou o Desenvolvimento Web
      </p>
      <p class="description-sub">
        Conheça o Ruby on Rails, um dos frameworks mais populares e influentes
        no desenvolvimento...
      </p>
      <div class="container-button">
        <img :src="attentionIcon" />
        <button>Clique e saiba mais</button>
      </div>
    </div>

    <div class="content-sub">
      <p class="title-sub">
        Ruby on Rails: A Framework que Revolucionou o Desenvolvimento Web
      </p>
      <p class="description-sub">
        Conheça o Ruby on Rails, um dos frameworks mais populares e influentes
        no desenvolvimento...
      </p>
      <div class="container-button">
        <img :src="attentionIcon" />
        <button>Clique e saiba mais</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import attentionIcon from "../assets/svg/attention.svg";

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
}
.description-sub {
  font-size: 13px;
  line-height: 1.2;
  color: var(--primary-color);
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
