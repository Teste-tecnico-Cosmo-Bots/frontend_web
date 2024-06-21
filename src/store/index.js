// src/store/index.js

import { createStore } from "vuex";
import {
  signIn,
  validToken,
  createPost,
  listPost,
  detailsPost,
  createComment,
  register,
  destroyComment,
  editPost,
  toggleLike,
} from "../services/api.js";

const store = createStore({
  state: {
    posts: [],
    postOne: null,
    user: null,
    isAdmin: false,
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
    setAdmin(state, isAdmin) {
      state.isAdmin = isAdmin;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setPostOne(state, postOne) {
      state.postOne = postOne;
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

    async signup({ commit }, { nome, email, password, password_confirmation }) {
      try {
        const response = await register({
          nome,
          email,
          password,
          password_confirmation,
        });
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
        commit("setAdmin", response.isAdmin);
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

    async submitEditPosts({}, { title, description, content, id }) {
      try {
        await editPost({ title, description, content }, id);

        return true;
      } catch (error) {
        console.error(error);
      }
    },
    async submitToggleLike({}, { post_id }) {
      try {
        await toggleLike({ post_id });

        return true;
      } catch (error) {
        console.error(error);
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

    async getOnePosts({ commit }, { id }) {
      try {
        const response = await detailsPost(id);
        commit("setPostOne", response);
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async submitComment({}, { content, post_id }) {
      try {
        await createComment({ content, post_id });
        return true;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteComment({}, { id }) {
      try {
        await destroyComment(id);
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
    postOne: (state) => state.postOne,
    isAdmin: (state) => state.isAdmin,
  },
});

export default store;
