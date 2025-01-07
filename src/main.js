import Vue, {createApp} from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import {BootstrapVue, BootstrapVueIcons} from "bootstrap-vue";
import "vue-toastification/dist/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./css/style.css";
import "./css/globals.css";
import router from "./router";

const app = createApp(App);

app.use(BootstrapVue);
app.use(BootstrapVueIcons);

app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
});

app.config.productionTip = false;

app.use(router);

app.mount("#app");
