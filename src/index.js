import "normalize.css";
import "./style/index.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import useElement from "./components/element-ui";
import App from "./App.vue";
import router from "./router";

/* eslint-disable */
globalThis.__VUE_OPTIONS_API__ = false;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
/* eslint-disable */

const app = createApp(App);
app.use(createPinia());
app.use(router);
useElement(app);

app.mount("#app");