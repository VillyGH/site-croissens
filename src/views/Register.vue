<template>
  <div>
    <b-container class="mt-5">
      <b-form @submit.prevent="register">
        <h1>Créer un compte</h1>
        <label class="mt-3">Courriel</label>
        <b-form-input
          required
          v-model="email"
          placeholder="Adresse courriel"
          type="text"
        />

        <label class="mt-3">Mot de passe</label>
        <b-form-input
          required
          v-model="password"
          placeholder="Mot de passe"
          type="password"
        />
        <div class="mt-4 text-danger">{{ errorMessage }}</div>
        <b-button type="submit" variant="primary" class="mt-4"
          >Créer le compte</b-button
        >
      </b-form>
      <b-button @click="signInWithGoogle" variant="danger" class="mt-4"
        >Se connecter avec Google</b-button
      >
    </b-container>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";
import { auth } from "@/firebase/firebaseInit";
import { ref } from "vue";

const email = ref("");
const password = ref("");
let errorMessage = ref("");
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("L'utilisateur a été enregistré avec succès !");
      router.push({
        name: "Login",
      });
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage.value = "Adresse courriel invalide";
          break;
        case "auth/user-not-found":
          errorMessage.value =
            "Aucun compte avec cette adresse courriel a été trouvé";
          break;
        case "auth/wrong-password":
          errorMessage.value = "Mot de passe invalide";
          break;
        default:
          errorMessage.value = "Compte déjà existant";
          break;
      }
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      router.push({ name: "Login" });
    })
    .catch((error) => {});
};
</script>
