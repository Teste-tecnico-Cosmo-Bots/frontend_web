<!-- AuthForm.vue -->
<template>
  <div class="auth-container-register">
    <div class="form-header-register">
      <p>{{ props.isLogin ? "Login" : "Cadastro" }}</p>
    </div>

    <form @submit.prevent="handleSubmit">
      <div v-if="!props.isLogin" class="form-group-register">
        <label class="form-label-register">
          <span>Nome</span>
          <input
            class="form-input-register"
            type="text"
            v-model="name"
            required
          />
        </label>
      </div>
      <div class="form-group-register">
        <label class="form-label-register">
          <span>E-mail</span>
          <input
            class="form-input-register"
            type="email"
            v-model="email"
            required
          />
        </label>
      </div>
      <div class="form-group-register">
        <label class="form-label-register">
          <span> Senha</span>
          <input
            class="form-input-register"
            type="password"
            v-model="password"
            required
          />
        </label>
      </div>
      <div v-if="!props.isLogin" class="form-group-register">
        <label class="form-label-register">
          <span> Confirmação de Senha</span>
          <input
            class="form-input-register"
            type="password"
            v-model="confirmPassword"
            required
          />
        </label>
      </div>

      <span
        class="form-create-accont"
        @click="props.isLogin ? openRegister() : openLogin()"
        >{{ props.isLogin ? "Criar conta" : "Já tenho uma conta" }}</span
      >
      <button type="submit" class="btn-primary-register">
        {{ props.isLogin ? "Login" : "Cadastrar" }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";

const emit = defineEmits(["openRegister", "openLogin"]);

const props = defineProps({
  isLogin: {
    type: Boolean,
    default: true,
  },
});

const store = useStore();
const router = useRouter();
const toast = useToast();

const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const handleSubmit = async () => {
  if (props.isLogin) {
    try {
      await store.dispatch("signIn", {
        email: email.value,
        password: password.value,
      });

      router.push("/");
    } catch (error) {
      toast.error("Email ou senha estão incorretos!", {
        timeout: 3000,
      });
    }
  } else {
    if (password.value !== confirmPassword.value) {
      toast.warning("As senhas não coincidem!", {
        timeout: 3000,
      });
      return;
    }

    try {
      await store.dispatch("signup", {
        nome: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: confirmPassword.value,
      });

      router.push("/");
    } catch (error) {
      toast.warning("Email já cadastrado!", {
        timeout: 3000,
      });
    }
  }
};

const openRegister = () => {
  emit("openRegister");
};

const openLogin = () => {
  emit("openLogin");
};
</script>

<style scoped>
.auth-container-register {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.auth-container-register form {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 20px;
}

.form-header-register p {
  font-size: 20px;
  font-weight: bold;
  color: var(--primary-color);
}

.form-label-register {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 13px;
}

.form-input-register {
  font-size: 13px;
  padding: 11px 12px;
  width: 300px;
  outline: none;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
}

.btn-primary-register {
  background-color: var(--secondary-color);
  padding: 12px 20px;
  border: 1px solid var(--secondary-color);
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  color: var(--text-one);
  cursor: pointer;
}

.form-create-accont {
  text-align: end;
  cursor: pointer;
  font-size: 12px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.008);
  }
}

.form-group-register {
  position: relative;
}

.form-label-register span {
  display: inline-block;
  /* transform: translate(10px, 18px); */
  background-color: #fff;
  transition: 0.3s ease;
  top: -4px;
  padding: 0 8px;
  left: 10px;
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  color: var(--primary-color);
}

.form-label-register:focus-within span {
  top: -25px;
  left: -5px;
  font-size: 13px;
  transition: 0.3s ease;
}
</style>
