import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseInit";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const getCurrentUser = () => {
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
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach(async (to, from, next) => {
  document.title = "Psy-Conscience - " + router.currentRoute.value.name;
});

export default router;
