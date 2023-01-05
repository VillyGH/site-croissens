import { createWebHistory, createRouter } from "vue-router";
import routes from "./routes";
import store from "../store/index";

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
  if (to.meta.requiresAuth && !store.getters["authentication/isLoggedIn"]) {
    next({
      name: "Login",
      query: { redirect: to.path },
    });
  } else if (to.meta.authPage && store.getters["authentication/isLoggedIn"]) {
    next({
      name: "Home",
    });
  } else {
    next();
  }
});

export default router;
