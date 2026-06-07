import EventView from "@/views/EventView.vue";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import Production from "@/views/Production.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/get/:id", name: "get-view", component: Production, props: true },
    {
      path: "/events",
      name: "events",
      component: EventView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: "/:catchAll(.*)*",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
