import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import "./normalize.css";
import "./teste.css";

createApp(App).use(router).mount("#app");
