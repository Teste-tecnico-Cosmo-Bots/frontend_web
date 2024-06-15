<!-- eslint-disable-next-line vue/multi-word-component-names -->
<template>
  <div class="card-create-post">
    <p>{{ props.create ? "Criar novo post" : "Editar post existente" }}</p>

    <div class="form-group">
      <label class="form-label">
        Título
        <input class="form-input" placeholder="Insira aqui seu título" />
      </label>

      <label class="form-label">
        Descrição
        <textarea
          class="form-textarea"
          placeholder="Insira aqui sua descrição"
        ></textarea>
      </label>

      <label class="form-label">
        Conteúdo
        <textarea
          class="form-textarea"
          placeholder="Insira aqui seu conteúdo"
        ></textarea>
      </label>
    </div>

    <div class="button-group">
      <button class="btn-primary">Publicar</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  create: {
    type: Boolean,
    default: false,
  },
});
</script>

<style></style>
