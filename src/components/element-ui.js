import Vue from "vue";

import "@rqjs/rqcomponents/lib/theme/base";
import "@rqjs/rqcomponents/lib/theme/base.css";

import Button from "element-ui/lib/button";
import ButtonGroup from "element-ui/lib/button-group";
import Message from "element-ui/lib/message";
import MessageBox from "element-ui/lib/message-box";
import Option from "element-ui/lib/option";

const ElSelect = () => import("element-ui/lib/select");

Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Option);
Vue.component("ElSelect", ElSelect);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
