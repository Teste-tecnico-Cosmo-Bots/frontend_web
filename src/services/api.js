import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

export const apiClient = axios.create({
  baseURL: API_URL,
});

export const signIn = async (email, password) => {
  try {
    const response = await apiClient.post("/login", {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};

export const register = async (data) => {
  try {
    const response = await apiClient.post("/signup", data);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};

export const validToken = async (token) => {
  try {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await apiClient.get("/valid/token");
    return response.data;
  } catch (error) {
    console.error("Erro ao validar token:", error);
  }
};

export const createPost = async (data, router) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push({ path: "/login" });
      return false;
    }

    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await apiClient.post("/posts", data);
    return true;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
};

export const listPost = async () => {
  try {
    const response = await apiClient.get("/posts");
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
};

export const detailsPost = async (id) => {
  try {
    const response = await apiClient.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
};

export const createComment = async (data) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await apiClient.post("/comments", data);
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
};
