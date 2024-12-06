import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from 'vue-router/auto-routes';
import App from "./App.vue";
import "./style.css";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
