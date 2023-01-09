import Home from "@/views/Home.vue";
import Ateliers from "@/views/Activites/Ateliers.vue";
import SouperCauserie from "@/views/Activites/SoupersCauserie.vue";
import Conferences from "@/views/Activites/Conferences.vue";
import Recherche from "@/views/Recherche.vue";
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
    path: "/ateliers",
    name: "Ateliers",
    component: Ateliers,
  },
  {
    path: "/souper-causerie",
    name: "SouperCauserie",
    component: SouperCauserie,
  },
  {
    path: "/conferences",
    name: "Conferences",
    component: Conferences,
  },
  {
    path: "/recherche",
    name: "Recherche",
    component: Recherche,
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
