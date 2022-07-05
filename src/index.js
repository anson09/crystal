import "normalize.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import useElement from "./components/element-ui";
import "./style/index.scss";
import App from "./App.vue";

/* eslint-disable */
globalThis.__VUE_OPTIONS_API__ = false;
globalThis.__VUE_PROD_DEVTOOLS__ = false;
/* eslint-disable */

const app = createApp(App);
app.use(createPinia());
app.use(router);
useElement(app);

app.mount("#app");
