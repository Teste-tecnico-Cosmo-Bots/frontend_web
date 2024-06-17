// src/store/index.js

import { createStore } from "vuex";
import { signIn, validToken, createPost, listPost } from "../services/api.js";

const store = createStore({
  state: {
    posts: [],
    user: null,
    token: localStorage.getItem("token") || null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    clearToken(state) {
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
    },
    setUser(state, user) {
      state.user = user;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    async signIn({ commit }, { email, password }) {
      try {
        const response = await signIn(email, password);
        commit("setToken", response.token);
      } catch (error) {
        console.error("Failed to sign in:", error);
        throw error;
      }
    },
    signOut({ commit }) {
      commit("clearToken");
    },
    async validateToken({ commit }) {
      const token = localStorage.getItem("token");
      console.log(token);
      try {
        if (!token) {
          commit("clearToken");
          return null;
        }
        const response = await validToken(token);
        commit("setUser", response);
        console.log("Token válido.");
      } catch (error) {
        console.error("Token inválido ou expirado:", error);
      }
    },
    async submitPosts({}, { title, description, content, router }) {
      try {
        await createPost({ title, description, content }, router);

        return true;
      } catch (error) {
        console.error("Token inválido ou expirado:", error);
      }
    },
    async getPosts({ commit }) {
      try {
        const response = await listPost();
        commit("setPosts", response);
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    token: (state) => state.token,
    user: (state) => state.user,
    posts: (state) => state.posts,
  },
});

export default store;
