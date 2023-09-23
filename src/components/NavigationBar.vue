<template>

  <b-navbar toggleable="lg" type="light">
    <b-navbar-brand href="#">
      <img alt="Logo Croissens" src="../assets/img/logo.jpg" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav>
      <router-link
        :to="{ name: 'Accueil' }"
        class="nav-link"
        v-bind:class="{ active: $route.name === 'Accueil' }"
      >Accueil
      </router-link>
      <router-link
        :to="{ name: 'Blogue' }"
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name === 'Blogue' }"
      >Blogue
      </router-link>
      <b-nav-item-dropdown class="ml-5" text="Activités">
        <b-dropdown-item
          :to="{ name: 'Ateliers' }"
          v-bind:class="{ active: $route.name === 'Ateliers' }"
        >Ateliers
        </b-dropdown-item
        >
        <b-dropdown-item
          :to="{ name: 'Échanges Intéractifs' }"
          v-bind:class="{ active: $route.name === 'Échanges Intéractifs' }"
        >Échanges Intéractifs
        </b-dropdown-item
        >
        <b-dropdown-item
          :to="{ name: 'Conférences' }"
          v-bind:class="{ active: $route.name === 'Conférences' }"
        >Conférences
        </b-dropdown-item
        >
      </b-nav-item-dropdown>
      <router-link
        :to="{ name: 'Recherche' }"
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name === 'Recherche' }"
      >Recherche
      </router-link
      >
      <router-link
        :to="{ name: 'À propos' }"
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name === 'À propos' }"
      >À propos
      </router-link
      >
      <router-link
        :to="{ name: 'Me joindre' }"
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name === 'Nous joindre' }"
      >Me Joindre
      </router-link
      >
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-link v-if="isLoggedIn" class="nav-link logout" @click="logOut">
        Se déconnecter
      </b-link>

      <router-link
        v-else
        :to="{ name: 'Connexion' }"
        class="nav-link mr-4"
        v-bind:class="{ active: $route.name === 'Connexion' }"
      >
        Connexion
      </router-link>
      <router-link
        v-if="!isLoggedIn"
        :to="{ name: 'Inscription' }"
        class="nav-link mr-4"
        v-bind:class="{ active: $route.name === 'Inscription' }">
        Inscription
      </router-link>
      </b-navbar-nav>
      </b-collapse>
  </b-navbar>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseInit";

const isLoggedIn = ref(false);

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});

const logOut = () => {
  signOut(auth).then(() => {
  });
};
</script>
