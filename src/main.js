import Vue from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "vue-toastification/dist/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./css/style.css";
import "./css/globals.css";
import constants from "./externalization/constants";
import router from "./router";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(constants);

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});

Vue.config.productionTip = false;

const app = Vue.createApp(App);

app.use(router);

app.mount("#app");
