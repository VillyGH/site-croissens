<template>
  <div>
    <b-container>
      <b-form @submit.prevent="register">
        <h1>Créer un compte</h1>
        <label>Courriel</label>
        <b-form-input
          required
          v-model="email"
          placeholder="Adresse courriel"
          type="text"
        />

        <label>Mot de passe</label>
        <b-form-input
          required
          v-model="password"
          placeholder="Mot de passe"
          type="password"
        />
        <b-button type="submit" variant="primary" class="mt-4"
          >Créer le compte</b-button
        >
      </b-form>
      <b-button @click="signInWithGoogle">Se connecter avec Google</b-button>
      <div v-if="errorMessage"></div>
    </b-container>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "@firebase/util";
import { ref } from "vue";
const email = ref("");
const password = ref("");
const errorMessage = ref("");

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("L'utilisateur a été enregistré avec succès !");
      router.push({
        name: "Login",
      });
    })
    .catch((error) => {
      console.log("Une erreur a eu lieu: " + error);
      errorMessage = "Une erreur s'est produite: " + error;
    });
};

</script>
