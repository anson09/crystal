import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(process.env.PUBLIC_PATH),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    { path: "/", component: () => import("./views/HomePage.vue") },
    {
      path: "/:pathMatch(.*)",
      component: () => import("./views/NotFound.vue"),
    },
  ],
  strict: true,
});
