import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const pages = {
  home: () => import("/views/Home.vue"),
  404: () => import("/views/NotFound.vue"),
};

export default function createRouter() {
  return new VueRouter({
    mode: "history",
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.PUBLIC_PATH,
    routes: [
      { path: "/", component: pages.home },
      { path: "*", component: pages[404] },
    ],
  });
}
