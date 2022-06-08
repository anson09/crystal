import {
  createRouter,
  createWebHistory,
  createMemoryHistory,
} from "vue-router";

export default createRouter({
  history: process.env.NODE_ENV
    ? createWebHistory(process.env.PUBLIC_PATH)
    : createMemoryHistory(process.env.PUBLIC_PATH),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      component: () => import("./views/HomePage.vue"),
      sitemap: true,
    },
    {
      path: "/:pathMatch(.*)",
      component: () => import("./views/NotFound.vue"),
    },
  ],
  strict: true,
});
