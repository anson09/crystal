import { createApp } from "vue";
import store from "./store";
import router from "./router";

import "normalize.css";
import element from "./components/element-ui";
import "./style/index.scss";
import App from "./App.vue";

/* eslint-disable */
globalThis.__VUE_OPTIONS_API__ = false;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
/* eslint-disable */

const app = createApp(App).use(store).use(router).use(element).mount("#app");
