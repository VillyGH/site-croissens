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
import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
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
      errorMessage = "Une erreur s'est produite: " + error;
      console.log(errorMessage);
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
          errorMessage.value =
            "Combinaison de mot de passe et d'adresse courriel invalide";
          break;
      }
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      router.push({ name: "Login" });
    })
    .catch((error) => {});
};
</script>
