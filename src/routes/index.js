import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DetailsPost from "../views/DetailsPost.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/post/:id",
    component: DetailsPost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
