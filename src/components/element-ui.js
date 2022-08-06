import { ElButton } from "element-plus/es/components/button/index.mjs";
import "element-plus/es/components/button/style/css.mjs";
import "element-plus/es/components/message/style/css.mjs";

const components = [ElButton];
export default {
  install: (app) => components.forEach((component) => app.use(component)),
};
