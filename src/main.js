import Vue from "vue";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import Vue2Editor from "vue2-editor";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import uiTextPlugin from "./externalization/uiTextPlugin";
import { app } from "./firebase/firebaseInit";

Vue.use(Vue2Editor);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(uiTextPlugin);

Vue.config.productionTip = false;

app.use(router);
app.config.globalProperties.$getUiText = (key) => {
  return uiTextPlugin[key];
};
app.mount("#app");
