import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./css/style.css";
import uiTextPlugin from "./externalization/uiTextPlugin";
import router from "./router";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(uiTextPlugin);

Vue.config.productionTip = false;

const app = Vue.createApp(App);

app.use(router);

app.mount("#app");
