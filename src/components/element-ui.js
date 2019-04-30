import Vue from "vue";

import "/assets/scss/element-ui.scss";

import Button from "element-ui/lib/button";
import ButtonGroup from "element-ui/lib/button-group";
import Message from "element-ui/lib/message";
import MessageBox from "element-ui/lib/message-box";
import Option from "element-ui/lib/option";
import Select from "element-ui/lib/select";
import Table from "element-ui/lib/table";
import TableColumn from "element-ui/lib/table-column";
import Tooltip from "element-ui/lib/tooltip";

Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Option);
Vue.use(Select);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tooltip);

Vue.prototype.$message = Message;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
