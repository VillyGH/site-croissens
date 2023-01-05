import Home from "@/views/Home.vue";
import PsyConscience from "@/views/Psy-Conscience.vue";
import Blog from "@/views/Blog.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import PageNotFound from "@/views/PageNotFound.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/psy-conscience",
    name: "Psy-Conscience",
    component: PsyConscience,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      authPage: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      authPage: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
  },
];
