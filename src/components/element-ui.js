import { ElButton } from "element-plus";
import "element-plus/es/components/button/style/css.mjs";
import "element-plus/es/components/message/style/css.mjs";

const components = [ElButton];
export default function useElement(app) {
  components.forEach((component) => app.use(component));
}
