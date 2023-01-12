import Accueil from "@/views/Accueil.vue";
import Ateliers from "@/views/Activites/Ateliers.vue";
import SouperCauserie from "@/views/Activites/SoupersCauserie.vue";
import Conferences from "@/views/Activites/Conferences.vue";
import Recherche from "@/views/Recherche.vue";
import Blog from "@/views/Blog.vue";
import ÀPropos from "@/views/ÀPropos.vue";
import Contact from "@/views/Contact.vue";
import Connexion from "@/views/Connexion.vue";
import Inscription from "@/views/Inscription.vue";
import PageNotFound from "@/views/PageNotFound.vue";

export default [
  {
    path: "/",
    name: "Accueil",
    component: Accueil,
  },
  {
    path: "/ateliers",
    name: "Ateliers",
    component: Ateliers,
  },
  {
    path: "/souper-causerie",
    name: "Souper Causerie",
    component: SouperCauserie,
  },
  {
    path: "/conferences",
    name: "Conférences",
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
    path: "/apropos",
    name: "À Propos",
    component: ÀPropos,
  },
  {
    path: "/contact",
    name: "Nous Joindre",
    component: Contact,
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: Connexion,
    meta: {
      authPage: true,
    },
  },
  {
    path: "/inscription",
    name: "Inscription",
    component: Inscription,
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
