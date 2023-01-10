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
          placeholder="Adresse courriel"
          type="text"
        />

        <label class="mt-3" for="password">Mot de passe</label>
        <b-form-input
          id="password"
          required
          v-model="password"
          placeholder="Mot de passe"
          type="password"
        />
        <div class="mt-4 text-danger">{{ errorMessage }}</div>
        <div class="mt-4 text-success">{{ nameVerifMessage }}</div>
        <b-button type="submit" id="submit" variant="primary" class="mt-4"
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
import { db, auth } from "@/firebase/firebaseInit";
import { ref } from "vue";
import { doc, getDoc } from "@firebase/firestore";

const username = ref("");
const email = ref("");
const password = ref("");
let errorMessage = ref("");
let nameVerifMessage = ref("");
const router = useRouter();
let exists = false;

const updateState = () => {
  if (errorMessage.value != "") {
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById("submit").disabled = false;
  }
};

const verifyUsername = async () => {
  if (username.value.length >= 3 && username.value.length <= 25) {
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
    errorMessage.value =
      "Le nom d'utilisateur doit comporter entre 3 et 25 caractères";
    nameVerifMessage.value = "";
  }
  updateState();
};

const register = async () => {
  if (exists) {
    errorMessage.value = "Le nom d'utilisateur existe déjà";
  } else if (errorMessage.value == "") {
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async (data) => {
        console.log("L'utilisateur a été enregistré avec succès !");
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
            errorMessage.value = "L'adresse courriel est déjà utilisée";
            break;
        }
        updateState();
      })
      .finally(async () => {
        await createUserNameDB();
        router.push({
          name: "Home",
        });
      });
  }
};

const createUserNameDB = async () => {
  // Create refs for both documents
  const userDoc = doc(db, `users`, auth.currentUser.uid);
  const usernameDoc = doc(db, `usernames`, username.value);

  // Commit both docs together as a batch write.
  const batch = db.batch();
  batch.set(userDoc, { name: username.value });
  batch.set(usernameDoc, { uid: auth.currentUser.uid });

  await batch.commit();
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
