<template>
  <div>
    <router-view />
    <div class="ml-5 mt-5">
      <h1 class="text-center">Blogue</h1>
      <b-col sm="4">
        <h3>Ajouter un Commentaire</h3>
        <div v-if="isLoggedIn">
          <b-form-textarea
            sm="2"
            v-model="comment"
            placeholder="Écrire un commentaire"
            rows="5"
            max-rows="6"
          ></b-form-textarea>
          <b-button @click="createComment" variant="primary" class="mt-4"
            >Envoyer</b-button
          >
          <span class="text-success">{{ successMessage }}</span>
        </div>
        <div v-else>
          <h5>Vous devez être connecté pour publier un commentaire</h5>
        </div>
        <div class="mt-4 text-danger">{{ errorMessage }}</div>
      </b-col>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { auth, db } from "@/firebase/firebaseInit";
import { addDoc, Timestamp, collection } from "@firebase/firestore";
import { onAuthStateChanged } from "@firebase/auth";

const comment = ref("");
const isLoggedIn = ref(false);
const errorMessage = ref("");
const successMessage = ref("");
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const createComment = async () => {
  if (comment.value.length >= 3 && comment.value.length <= 450) {
    const commentData = {
      date: Timestamp.now(),
      owner: auth.currentUser.uid,
      text: comment.value,
    };

    const commentCol = collection(db, `comments`);
    await addDoc(commentCol, commentData);
    errorMessage.value = "";
    successMessage.value = "Le commentaire a bien été publié !";
  } else {
    errorMessage.value = "Le commentaire doit avoir entre 3 et 450 caractères";
  }
};
</script>
