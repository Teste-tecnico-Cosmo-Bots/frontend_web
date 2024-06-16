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

<style>
.card-create-post {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.card-create-post p {
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.form-label {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13px;
  color: var(--primary-color);
}
.form-input {
  padding: 10px 10px;
  outline: none;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  font-size: 12px;
}
.form-textarea {
  width: 100%;
  border: 2px solid var(--primary-color);

  resize: none;
  padding: 10px 10px;
  border-radius: 5px;
  font-size: 13px;
  min-height: 80px;
  outline: none;
}
.button-group {
  display: flex;
  justify-content: flex-end;
}

.button-group button {
  padding: 8px 20px;
  border: 2px solid var(--secondary-color);
  background-color: var(--text-one);
  color: var(--secondary-color);
  font-weight: 700;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-color);
    color: var(--text-one);
  }
}
</style>
