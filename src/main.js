import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import uiTextPlugin from "./externalization/uiTextPlugin";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(uiTextPlugin);

Vue.config.productionTip = false;

const app = createApp(App);
app.use(router);
app.use(store);
app.config.globalProperties.$getUiText = (key) => {
  return uiTextPlugin[key];
};
app.mount("#app");
