import { createWebHistory, createRouter } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  // https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
  if (to.matched.some((record) => record.meta.authPage)) {
    if (await getCurrentUser()) {
      next({
        name: "Login",
        query: { redirect: to.path },
      });
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
