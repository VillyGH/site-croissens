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
            v-model="createdComment"
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
        <h3 v-if="comments.length != 0">{{ comments.length }} Commentaires</h3>
        <h3 v-else>Aucun Commentaire</h3>
        <div class="mb-4" v-bind:key="comment" v-for="comment in comments">
          <div></div>
          <div>{{ comment.owner }}</div>
          <div>
            {{ moment(comment.date).fromNow() }}
          </div>
          <div class="mt-4">
            {{ comment.text }}
            <b-icon-pencil-square class="ml-5"
              ><button @click="editMode(comment)"></button
            ></b-icon-pencil-square>
            <b-button
              @click="createComment"
              variant="primary"
              class="mt-4"
              id="confirmEditBtn"
              hidden
              >Confirmer</b-button
            >
          </div>
        </div>
      </b-col>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { auth, db } from "@/firebase/firebaseInit";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "@firebase/firestore";
import { onAuthStateChanged } from "@firebase/auth";
import moment from "moment";

const createdComment = ref("");
const isLoggedIn = ref(false);
const errorMessage = ref("");
const successMessage = ref("");
const comments = ref([]);
onMounted(async () => {
  moment.locale("fr");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
  await loadComments();
});

const createComment = async () => {
  if (createdComment.value.length >= 3 && createdComment.value.length <= 450) {
    const username = await getCurrentUsername();
    const commentData = {
      date: moment().format("MMMM Do YYYY, h:mm:ss"),
      owner: username,
      text: createdComment.value,
    };
    await addDoc(collection(db, `comments`), commentData);
    successMessage.value = "Le commentaire a bien été publié !";
    errorMessage.value = "";
    createdComment.value = "";
    window.location.reload();
  } else {
    errorMessage.value = "Le commentaire doit avoir entre 3 et 450 caractères";
  }
};

const editMode = async (comment) => {
  document.getElementById("confirmEditBtn").hidden = false;
  console.log("t");
};

const getCurrentUsername = async () => {
  const user = await getDoc(doc(db, "users", auth.currentUser.uid));
  if (user.exists()) {
    return user.data().name;
  }
};

const loadComments = async () => {
  const querySnapshot = await getDocs(query(collection(db, "comments")));
  querySnapshot.forEach((doc) => {
    comments.value.push(doc.data());
  });
};
</script>
