import Accueil from "@/views/Accueil.vue";
import Ateliers from "@/views/Activites/Ateliers.vue";
import EchangesInteractifs from "@/views/Activites/EchangesInteractifs.vue";
import Conferences from "@/views/Activites/Conferences.vue";
import Recherche from "@/views/Recherche.vue";
import Blogue from "@/views/Blogue/Blogue.vue";
import CategorieArticle from "@/views/Blogue/CategorieArticle.vue";
import Article from "@/views/Blogue/Article.vue";
import ÀPropos from "@/views/ÀPropos.vue";
import Contact from "@/views/Contact.vue";
import Connexion from "@/views/Connexion.vue";
import Inscription from "@/views/Inscription.vue";
import PageNotFound from "@/views/PageNotFound.vue";

export default [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
  },
  {
    path: "/ateliers",
    name: "Ateliers",
    component: Ateliers
  },
  {
    path: "/echanges-interactifs",
    name: "Échanges Intéractifs",
    component: EchangesInteractifs
  },
  {
    path: "/conferences",
    name: "Conférences",
    component: Conferences
  },
  {
    path: "/recherche",
    name: "Recherche",
    component: Recherche
  },
  {
    path: "/blogue",
    name: "Blogue",
    component: Blogue
  },
  {
    path: "/categorie-article/:name",
    name: "Categorie Article",
    component: CategorieArticle
  },
  {
    path: "/article/:id",
    name: "Article",
    component: Article
  },
  {
    path: "/apropos",
    name: "À propos",
    component: ÀPropos
  },
  {
    path: "/contact",
    name: "Me joindre",
    component: Contact
  },
  {
    path: "/connexion",
    name: "Connexion",
    component: Connexion,
    meta: {
      authPage: true
    }
  },
  {
    path: "/inscription",
    name: "Inscription",
    component: Inscription,
    meta: {
      authPage: true
    }
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound
  }
];
