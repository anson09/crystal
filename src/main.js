import "core-js/stable";
import "regenerator-runtime/runtime";
import mitt from "mitt";
import Vue from "vue";
import { sync } from "vuex-router-sync";

import "normalize.css";
import "./components/element-ui";
import * as filters from "./util/filters";
import createStore from "./store";
import createRouter from "./router";
import App from "./App.vue";

import "./assets/icon/iconfont.css";
import "@rqjs/rqthemes/lib/element-light.css";
import "@rqjs/rqthemes/lib/element-dark.css";
import "@rqjs/rqthemes/lib/legacy.css";

window.rqevent = mitt();
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

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
