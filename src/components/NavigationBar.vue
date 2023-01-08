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
      <router-link
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name == 'Psy-conscience' }"
        :to="{ name: 'Psy-Conscience' }"
        >Psy-Conscience</router-link
      >
      <router-link
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name == 'About' }"
        :to="{ name: 'About' }"
        >À propos</router-link
      >
    </div>
    <div class="navbar-nav ml-auto">
      <b-link @click="logout" v-if="isLoggedIn" class="nav-link logout">
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
import { auth } from "../firebase/firebaseInit.js";

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
