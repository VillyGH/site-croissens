<template>
  <div>
    <b-container class="mt-5">
      <b-form @submit.prevent="register">
        <h1>Créer un compte</h1>
        <label class="mt-3" for="username">Nom d'utilisateur</label>
        <b-form-input
          id="username"
          required
          v-model="username"
          @input="verifyUsername"
          placeholder="Nom d'utilisateur"
          type="text"
        />
        <label class="mt-3" for="email">Courriel</label>
        <b-form-input
          id="email"
          required
          v-model="email"
          @input="verifyUsername"
          placeholder="Adresse courriel"
          type="text"
        />

        <label class="mt-3" for="password">Mot de passe</label>
        <b-form-input
          id="password"
          required
          v-model="password"
          @input="verifyUsername"
          placeholder="Mot de passe"
          type="password"
        />
        <div class="mt-4 text-danger">{{ errorMessage }}</div>
        <div class="mt-4 text-success">{{ nameVerifMessage }}</div>
        <b-button type="submit" id="submit" variant="primary" class="mt-4"
        >Créer le compte
        </b-button
        >
      </b-form>
      <b-button @click="signInWithGoogle" variant="danger" class="mt-4"
      >Se connecter avec Google
      </b-button
      >
    </b-container>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth, db } from "@/firebase/firebaseInit";
import { ref } from "vue";
import { doc, getDoc, writeBatch } from "@firebase/firestore";
import errorMessages from "@/externalization/constants";

const username = ref("");
const email = ref("");
const password = ref("");
let errorMessage = ref("");
let nameVerifMessage = ref("");
const router = useRouter();
let exists = false;

const updateState = () => {
  document.getElementById("submit").disabled = errorMessage.value !== "";
};

const verifyUsername = async () => {
  if (username.value.length >= 2 && username.value.length <= 50) {
    const docRef = doc(db, "usernames", username.value);
    const docSnap = await getDoc(docRef);
    exists = docSnap.exists();
    if (exists) {
      errorMessage.value = "Le nom d'utilisateur existe déjà";
      nameVerifMessage.value = "";
    } else {
      nameVerifMessage.value = "Ce nom est disponible !";
      errorMessage.value = "";
    }
  } else {
    errorMessage.value = errorMessages.wrongUsernameLength;
    nameVerifMessage.value = "";
  }
  updateState();
};

const register = async () => {
  if (exists) {
    errorMessage.value = "Le nom d'utilisateur existe déjà";
  } else if (errorMessage.value === "") {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async (data) => {
        console.log("L'utilisateur a été enregistré avec succès !");
        await createUserNameDB();
        await router.push({
          name: "Accueil"
        });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            errorMessage.value = "Adresse courriel invalide";
            break;
          case "auth/email-already-in-use":
            errorMessage.value = "Adresse courriel déjà utilisée";
            break;
          case "auth/invalid-password":
            errorMessage.value = "Le mot de passe est invalide";
            break;
          case "auth/weak-password":
            errorMessage.value =
              "Le mot de passe doit comporter au moins 6 caractères";
            break;
          default:
            errorMessage.value = "Erreur: " + error.code;
            break;
        }
        updateState();
      });
  }
};

const createUserNameDB = async () => {
  const userDoc = doc(db, `users`, auth.currentUser.uid);
  const usernameDoc = doc(db, `usernames`, username.value);

  const batch = writeBatch(db);
  batch.set(userDoc, { name: username.value });
  batch.set(usernameDoc, { uid: auth.currentUser.uid });
  await batch.commit();
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      router.push({ name: "Accueil" });
    })
    .catch((error) => {
    });
};
</script>
