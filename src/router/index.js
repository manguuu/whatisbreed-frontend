import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Result from "../views/Result.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/result",
      name: "result",
      component: Result,
    },
  ],
});

export default router;
