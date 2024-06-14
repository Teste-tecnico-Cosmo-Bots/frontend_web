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

<style scoped></style>
