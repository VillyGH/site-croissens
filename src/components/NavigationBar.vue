<template>
  <img src="../assets/img/logo.jpg" alt="Logo Croissens" />
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-nav mr-auto">
      <router-link
        class="nav-link"
        v-bind:class="{ active: $route.name == 'Home' }"
        :to="{ name: 'Home' }"
        >Accueil</router-link
      >
      <router-link
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name == 'Blog' }"
        :to="{ name: 'Blog' }"
        >Blog</router-link
      >
      <b-nav-item-dropdown text="Activités" class="ml-5">
        <b-dropdown-item
          ><router-link
            v-bind:class="{ active: $route.name == 'Ateliers' }"
            :to="{ name: 'Ateliers' }"
            >Ateliers</router-link
          ></b-dropdown-item
        >
        <b-dropdown-item
          ><router-link
            v-bind:class="{ active: $route.name == 'SouperCauserie' }"
            :to="{ name: 'SouperCauserie' }"
            >Soupers Causerie</router-link
          ></b-dropdown-item
        >
        <b-dropdown-item
          ><router-link
            v-bind:class="{ active: $route.name == 'Conferences' }"
            :to="{ name: 'Conferences' }"
            >Conférences</router-link
          ></b-dropdown-item
        >
      </b-nav-item-dropdown>
      <router-link
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name == 'Recherche' }"
        :to="{ name: 'Recherche' }"
        >Projet de recherche</router-link
      >
      <router-link
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name == 'About' }"
        :to="{ name: 'About' }"
        >À propos</router-link
      >
    </div>
    <div class="navbar-nav ml-auto">
      <b-link @click="logOut" v-if="isLoggedIn" class="nav-link logout">
        Se déconnecter
      </b-link>

      <router-link
        class="nav-link"
        v-bind:class="{ active: $route.name == 'Login' }"
        v-else
        :to="{ name: 'Login' }"
      >
        Connexion
      </router-link>
      <router-link
        class="nav-link"
        v-bind:class="{ active: $route.name == 'Register' }"
        v-if="!isLoggedIn"
        :to="{ name: 'Register' }"
      >
        Inscription
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebaseInit";

const isLoggedIn = ref(false);
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const logOut = () => {
  signOut(auth).then(() => {});
};
</script>
