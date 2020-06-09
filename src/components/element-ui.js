import Vue from "vue";

import "element-ui/lib/theme-chalk/base.css";
import "element-ui/lib/theme-chalk/button.css";
import "element-ui/lib/theme-chalk/button-group.css";
import "element-ui/lib/theme-chalk/message.css";
import "element-ui/lib/theme-chalk/message-box.css";
import "element-ui/lib/theme-chalk/option.css";
import "element-ui/lib/theme-chalk/select.css";

import Button from "element-ui/lib/button";
import ButtonGroup from "element-ui/lib/button-group";
import Message from "element-ui/lib/message";
import MessageBox from "element-ui/lib/message-box";
import Option from "element-ui/lib/option";
import Select from "element-ui/lib/select";

Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Option);
Vue.use(Select);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
