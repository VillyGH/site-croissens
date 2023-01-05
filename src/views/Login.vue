<template>
  <div>
    <b-container>
      <h1>Connexion</h1>
      <label>Adresse courriel</label>
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
      <b-button @click="login" variant="primary" class="mt-4"
        >Se connecter</b-button
      >
      <b-button @click="signInWithGoogle">Se connecter avec Google</b-button>
      <div>{{ errorMessage }}</div>
    </b-container>
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "@firebase/util";
import { ref } from "vue";
const email = ref("");
const password = ref("");
const errorMessage = ref("");

const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("L'utilisateur a été enregistré avec succès !");
      router.push({
        name: "Login",
      });
    })
    .catch((error) => {
      errorMessage = "Une erreur s'est produite: " + error;
      console.log(errorMessage);
    });
};
</script>
