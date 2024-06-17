import { createApp } from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import App from "./App.vue";
import router from "./routes";
import "./normalize.css";
import "./teste.css";
import store from "./store/index";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(Toast);

app.mount("#app");
