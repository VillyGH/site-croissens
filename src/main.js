import Vue /*, { createApp } */ from "vue";
//import App from "./App.vue";
import router from "./router";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import uiTextPlugin from "./externalization/uiTextPlugin";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB45hiF1GD0qxJ_ZRj3IfV31pOrJzr5HKw",
  authDomain: "sitecroissens.firebaseapp.com",
  projectId: "sitecroissens",
  storageBucket: "sitecroissens.appspot.com",
  messagingSenderId: "1009267990375",
  appId: "1:1009267990375:web:892691f9510747518299c2",
  measurementId: "G-0VCJZKTJET",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(uiTextPlugin);

Vue.config.productionTip = false;

app.use(router);
app.config.globalProperties.$getUiText = (key) => {
  return uiTextPlugin[key];
};
app.mount("#app");
