import "core-js/stable";
import "regenerator-runtime/runtime";
import Vue from "vue";
import { sync } from "vuex-router-sync";

import "./components/element-ui";
import * as filters from "./util/filters";
import mixin from "./util/mixin";
import createStore from "./store";
import createRouter from "./router";
import App from "./App.vue";

import "./assets/icon/iconfont.css";
import "@rqjs/rqthemes";

Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));
Vue.mixin(mixin);

const store = createStore();
const router = createRouter();
sync(store, router);

Vue.prototype.$isDev = Vue.config.performance =
  process.env.NODE_ENV !== "production";

/* eslint-disable-next-line no-new */
new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
