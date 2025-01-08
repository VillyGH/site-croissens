import Vue, {createApp} from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import {createBootstrap} from 'bootstrap-vue-next'
import "vue-toastification/dist/index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "./css/style.css";
import "./css/globals.css";
import router from "./router";

const app = createApp(App);

app.use(createBootstrap());

app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
});

app.config.productionTip = false;

app.use(router);

app.mount("#app");
