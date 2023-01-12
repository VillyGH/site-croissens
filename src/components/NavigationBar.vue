<template>
  <img src="../assets/img/logo.jpg" alt="Logo Croissens" />
  <b-navbar type="light">
    <b-navbar-nav>
      <router-link
        class="nav-link"
        v-bind:class="{ active: $route.name == 'Accueil' }"
        :to="{ name: 'Accueil' }"
        >Accueil</router-link
      >
      <router-link
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name == 'Blogue' }"
        :to="{ name: 'Blogue' }"
        >Blogue</router-link
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
          v-bind:class="{ active: $route.name == 'Échanges Intéractifs' }"
          :to="{ name: 'Échanges Intéractifs' }"
          >Échanges Intéractifs</b-dropdown-item
        >
        <b-dropdown-item
          v-bind:class="{ active: $route.name == 'Conférences' }"
          :to="{ name: 'Conférences' }"
          >Conférences</b-dropdown-item
        >
      </b-nav-item-dropdown>
      <router-link
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name == 'Recherche' }"
        :to="{ name: 'Recherche' }"
        >Recherche</router-link
      >
      <router-link
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name == 'À propos' }"
        :to="{ name: 'À propos' }"
        >À propos</router-link
      >
      <router-link
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name == 'Nous joindre' }"
        :to="{ name: 'Nous joindre' }"
        >Nous Joindre</router-link
      >
    </b-navbar-nav>
    <div class="navbar-nav ml-auto">
      <b-link @click="logOut" v-if="isLoggedIn" class="nav-link logout">
        Se déconnecter
      </b-link>

      <router-link
        class="nav-link mr-4"
        v-bind:class="{ active: $route.name == 'Connexion' }"
        v-else
        :to="{ name: 'Connexion' }"
      >
        Connexion
      </router-link>
      <router-link
        class="nav-link mr-4"
        v-bind:class="{ active: $route.name == 'Inscription' }"
        v-if="!isLoggedIn"
        :to="{ name: 'Inscription' }"
      >
        Inscription
      </router-link>
    </div>
  </b-navbar>
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
