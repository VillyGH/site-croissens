<template>
  <div>
    <BContainer class="mt-5 authContainer" fluid="md">
      <BForm @submit.prevent="login">
        <h1 class="text-center">Connexion</h1>
        <label class="mt-3">Adresse courriel</label>
        <BFormInput v-model="email" placeholder="Adresse courriel" required type="text"/>
        <label class="mt-3">Mot de passe</label>
        <BFormInput v-model="password" placeholder="Mot de passe" required type="password"/>
        <div class="mt-4 text-danger">{{ errorMessage }}</div>
        <div class="d-flex justify-content-center mt-4 gap-3">
          <BButton class="authButton" type="submit" variant="primary">
            Se connecter
          </BButton>
          <BButton class="authButton" variant="danger" @click="signInWithGoogle">
            Se connecter avec Google
          </BButton>
        </div>
      </BForm>
    </BContainer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";
import { auth, db } from "@/firebase/firebaseInit";
import { doc, getDoc, writeBatch } from "@firebase/firestore";
import { errorMessages } from "@/externalization/constants";

// Import des composants BootstrapVueNext
import { BContainer, BForm, BFormInput, BButton } from "bootstrap-vue-next";

const email = ref("");
const password = ref("");
const errorMessage = ref();
const router = useRouter();
const toast = useToast();

const login = () => {
  if (verifyUsername(email.value)) {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          toast.success("L'utilisateur a été enregistré avec succès !");
          router.push({ name: "Accueil" });
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              errorMessage.value = errorMessages.invalidEmail;
              break;
            case "auth/user-not-found":
              errorMessage.value = errorMessages.userNotFound;
              break;
            case "auth/wrong-password":
              errorMessage.value = errorMessages.invalidPassword;
              break;
            default:
              errorMessage.value = errorMessages.defaultMessage;
              break;
          }
        });
  }
};

const verifyUsername = async (username) => {
  if (username.length < 2 || username.length > 50) {
    errorMessage.value = errorMessages.wrongUsernameLength;
    return false;
  }
  return true;
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
      .then(async (result) => {
        const usernameSnap = await getDoc(
            doc(db, "usernames", result.user.displayName)
        );
        const userSnap = await getDoc(doc(db, "users", result.user.uid));
        if (!usernameSnap.exists() && !userSnap.exists()) {
          await createUserNameDB(result.user.displayName);
        }
        await router.push({ name: "Accueil" });
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            errorMessage.value = errorMessages.invalidEmail;
            break;
          case "auth/user-not-found":
            errorMessage.value = errorMessages.userNotFound;
            break;
          case "auth/wrong-password":
            errorMessage.value = errorMessages.invalidPassword;
            break;
          case "auth/account-exists-with-different-credential":
            errorMessage.value =
                errorMessages.accountExistsWithDifferentCredential;
            break;
          default:
            errorMessage.value =
                "Une erreur s'est produite: " + error.code + " " + error.message;
            break;
        }
      });
};

const createUserNameDB = async (username) => {
  const userDoc = doc(db, `users`, auth.currentUser.uid);
  const usernameDoc = doc(db, `usernames`, username);

  const batch = writeBatch(db);
  batch.set(userDoc, { name: username });
  batch.set(usernameDoc, { uid: auth.currentUser.uid });

  await batch.commit();
};
</script>
