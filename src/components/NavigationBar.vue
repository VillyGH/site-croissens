<template>
  <BNavbar toggleable="lg">
    <BNavbarBrand href="#"><router-link
        :to="{ name: 'Accueil' }"
        class="nav-link"
        :class="{ active: $route.name === 'Accueil' }"
    >Logo</router-link></BNavbarBrand>
    <BNavbarToggle target="nav-collapse"></BNavbarToggle>
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>

        <router-link
            :to="{ name: 'Blogue' }"
            class="nav-link ms-5"
            :class="{ active: $route.name === 'Blogue' }"
        >Blogue</router-link>
        <BNavItemDropdown class="ms-5" text="Activités">
          <BDropdownItem :to="{ name: 'Ateliers' }" :class="{ active: $route.name === 'Ateliers' }">Ateliers</BDropdownItem>
          <BDropdownItem :to="{ name: 'Échanges Intéractifs' }" :class="{ active: $route.name === 'Échanges Intéractifs' }">Échanges Intéractifs</BDropdownItem>
          <BDropdownItem :to="{ name: 'Conférences' }" :class="{ active: $route.name === 'Conférences' }">Conférences</BDropdownItem>
        </BNavItemDropdown>
        <router-link
            :to="{ name: 'Recherche' }"
            class="nav-link ms-5 disabled"
            :class="{ active: $route.name === 'Recherche' }"
        >Recherche</router-link>
        <router-link
            :to="{ name: 'Me joindre' }"
            class="nav-link ms-5"
            :class="{ active: $route.name === 'Nous joindre' }"
        >Me Joindre</router-link>
        <router-link
            :to="{ name: 'À propos' }"
            class="nav-link ms-5"
            :class="{ active: $route.name === 'À propos' }"
        >À propos</router-link>
      </BNavbarNav>
      <BNavbarNav class="ms-auto">
        <BLink v-if="isLoggedIn" class="nav-link logout" @click="logOut">
          Se déconnecter
        </BLink>
        <router-link
            v-else
            :to="{ name: 'Connexion' }"
            class="nav-link me-4"
            :class="{ active: $route.name === 'Connexion' }"
        >Connexion</router-link>
        <router-link
            v-if="!isLoggedIn"
            :to="{ name: 'Inscription' }"
            class="nav-link me-4"
            :class="{ active: $route.name === 'Inscription' }"
        >Inscription</router-link>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "@/firebase/firebaseInit";
import {BNavbar, BNavbarBrand, BNavbarToggle, BCollapse,
  BNavbarNav, BNavItemDropdown, BDropdownItem, BLink} from "bootstrap-vue-next";
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
