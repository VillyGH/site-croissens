<template>
  <div>
    <b-container class="mt-5">
      <b-form @submit.prevent="register">
        <h1>Créer un compte</h1>
        <label class="mt-3" for="username">Nom d'utilisateur</label>
        <b-form-input
          id="username"
          v-model="username"
          placeholder="Nom d'utilisateur"
          required
          type="text"
          @input="verifyUsername"
        />
        <label class="mt-3" for="email">Courriel</label>
        <b-form-input
          id="email"
          v-model="email"
          placeholder="Adresse courriel"
          required
          type="text"
          @input="verifyUsername"
        />

        <label class="mt-3" for="password">Mot de passe</label>
        <b-form-input
          id="password"
          v-model="password"
          placeholder="Mot de passe"
          required
          type="password"
          @input="verifyUsername"
        />
        <div class="mt-4 text-danger">{{ errorMessage }}</div>
        <div class="mt-4 text-success">{{ nameVerifMessage }}</div>
        <b-button id="submit" class="mt-4" type="submit" variant="primary"
        >Créer le compte
        </b-button
        >
      </b-form>
      <b-button class="mt-4" variant="danger" @click="signInWithGoogle"
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
import { errorMessages, successMessages } from "@/externalization/constants";
import { useToast } from "vue-toastification";

const username = ref("");
const email = ref("");
const password = ref("");
let errorMessage = ref("");
let nameVerifMessage = ref("");
const router = useRouter();
let exists = false;
const toast = useToast();

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
      .then(async () => {
        await createUserNameDB();
        await router.push({
          name: "Accueil"
        });
      })
      .catch((error) => {
        let errorCode;
        switch (error.code) {
          case "auth/invalid-email":
            errorCode = errorMessages.invalidLogin;
            break;
          case "auth/email-already-in-use":
            errorCode = errorMessages.alreadyUsedEmail;
            break;
          case "auth/invalid-password":
            errorCode = errorMessages.invalidLogin;
            break;
          case "auth/weak-password":
            errorCode =
              "Le mot de passe doit comporter au moins 6 caractères";
            break;
          default:
            errorCode = "Erreur: " + error.code;
            break;
        }
        toast.error(errorCode);
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
    .then(() => {
      router.push({ name: "Accueil" });
      toast.success(successMessages.authentification);
    })
    .catch((error) => {
      toast.error(errorMessages.defaultMessage + error);
    });
};
</script>
