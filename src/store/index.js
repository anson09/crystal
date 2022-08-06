import { createPinia } from "pinia";
import resetStore from "./plugins/reset";

const pinia = createPinia().use(resetStore);

const resetAllStore = () => {
  // eslint-disable-next-line no-underscore-dangle
  pinia._s.forEach((o) => o.$reset());
};

export { resetAllStore };
export default pinia;
