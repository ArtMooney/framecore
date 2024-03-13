import { createRouter, createWebHistory } from "vue-router";

export default () =>
  createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "Home",
        component: () => import("./pages/Home.vue"),
      },
      {
        path: "/case",
        name: "Case",
        component: () => import("./components/Animations.vue"),
      },
      {
        path: "/kontakt",
        name: "Kontakt",
        component: () => import("./components/Commercials.vue"),
      },
    ],
  });
