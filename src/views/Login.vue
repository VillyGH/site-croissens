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
import router from "./router";
import { getAuth, signInWithEmailAndPassword } from "@firebase/util";
import { ref } from "vue";
const email = ref("");
const password = ref("");
let errorMessage = ref();

const login = () => {
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
