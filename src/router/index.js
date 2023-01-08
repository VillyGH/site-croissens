import { createWebHistory, createRouter } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseInit";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

/* const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      auth,
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.authPage)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
}); */

export default router;
