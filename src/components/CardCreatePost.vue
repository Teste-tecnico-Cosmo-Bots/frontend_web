<template>
  <div class="card-create-post">
    <p>{{ create ? "Criar novo post" : "Editar post existente" }}</p>

    <div class="form-group">
      <label class="form-label">
        Título
        <input
          v-model="postData.title"
          class="form-input"
          placeholder="Insira aqui seu título"
        />
      </label>

      <label class="form-label">
        Descrição
        <textarea
          v-model="postData.description"
          class="form-textarea"
          placeholder="Insira aqui sua descrição"
        ></textarea>
      </label>

      <label class="form-label">
        Conteúdo
        <textarea
          v-model="postData.content"
          class="form-textarea"
          placeholder="Insira aqui seu conteúdo"
        ></textarea>
      </label>
    </div>

    <div class="button-group">
      <button @click="handleSubmit" class="btn-primary">
        {{ create ? "Publicar" : "Salvar Alterações" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const store = useStore();
const router = useRouter();
const toast = useToast();

const props = defineProps({
  create: {
    type: Boolean,
    default: false,
  },
  post: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["close"]);

const postData = ref({
  title: "",
  description: "",
  content: "",
});

const handleSubmit = () => {
  const { title, description, content } = postData.value;

  if (props.create) {
    store.dispatch("submitPosts", { title, description, content, router });
    store.dispatch("getPosts", {});
    toast.success("Post criado com sucesso!", {
      timeout: 3000,
    });
    emit("close");
  } else {
    store.dispatch("submitEditPosts", {
      title,
      description,
      content,
      id: props.post.id,
    });
    store.dispatch("getOnePosts", { id: props.post.id });
    toast.success("Post editado com sucesso!", {
      timeout: 3000,
    });
    emit("close");
    return null;
  }
};

const onDetailsEdit = () => {
  postData.value.title = props.post.title;
  postData.value.description = props.post.description;
  postData.value.content = props.post.content;
};

onMounted(() => {
  onDetailsEdit();
});
</script>

<style scoped>
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
