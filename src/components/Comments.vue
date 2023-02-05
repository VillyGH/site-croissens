<template>
  <b-col sm="4">
    <h3 class="mt-5">Ajouter un Commentaire</h3>
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
    <div class="mb-6" v-bind:key="comment" v-for="comment in comments">
      <div>{{ comment.owner }}</div>
      <div>
        <span v-if="comment.modified">Modifié </span>
        {{ moment(comment.date).fromNow() }}
      </div>
      <div class="mb-4">
        <textarea
          v-model="comment.text"
          class="input-message mt-3"
          id="comment"
          rows="1"
          cols="45"
          required
          v-bind:disabled="editedCommentId !== comment.id"
        ></textarea>
        <a
          v-if="isLoggedIn && comment.owner === username"
          @click="changeEditMode(comment.id)"
          class="ml-4"
          ><b-icon-pencil-square
            style="vertical-align: 0.5em"
          ></b-icon-pencil-square>
        </a>
        <div>
          <b-button
            @click="editComment(comment)"
            variant="primary"
            class="mt-2"
            id="confirmEditBtn"
            v-bind:hidden="editedCommentId !== comment.id"
            >Confirmer</b-button
          >
          <b-button
            @click="changeEditMode(comment.id)"
            variant="secondary"
            class="mt-2"
            id="confirmEditBtn"
            v-bind:hidden="editedCommentId !== comment.id"
            >Annuler</b-button
          >
        </div>
        <div class="mt-4 text-danger">{{ editErrorMessage }}</div>
      </div>
    </div>
  </b-col>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { auth, db } from "@/firebase/firebaseInit";
import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from "@firebase/firestore";
import { onAuthStateChanged } from "@firebase/auth";
import moment from "moment";

const createdComment = ref("");
const isLoggedIn = ref(false);
const errorMessage = ref("");
const successMessage = ref("");
const editErrorMessage = ref("");
const comments = ref([]);
const username = ref("");
const editedCommentId = ref("");

const props = defineProps(["articleId"]);

onMounted(async () => {
  moment.locale("fr");
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
  await loadComments();
  username.value = await getCurrentUsername();
});

const createComment = async () => {
  if (createdComment.value.length >= 3 && createdComment.value.length <= 450) {
    const commentData = {
      date: moment().format("MMMM Do YYYY, HH:mm:ss"),
      owner: username.value,
      text: createdComment.value,
      article: props.articleId,
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

const editComment = async (comment) => {
  if (comment.text.length >= 3 && comment.text.length <= 450) {
    const commentData = {
      date: moment().format("MMMM Do YYYY, HH:mm:ss"),
      text: comment.text,
      modified: true,
    };
    await updateDoc(doc(db, "comments", comment.id), commentData);
    editErrorMessage.value = "";
    window.location.reload();
  } else {
    editErrorMessage.value =
      "Le commentaire doit avoir entre 3 et 450 caractères";
  }
};

const changeEditMode = async (id) => {
  if (editedCommentId.value === "") {
    editedCommentId.value = id;
  } else {
    editedCommentId.value = "";
  }
};

const getCurrentUsername = async () => {
  const user = await getDoc(doc(db, "users", auth.currentUser.uid));
  if (user.exists()) {
    return user.data().name;
  }
};

const loadComments = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "comments"), where("article", "==", props.articleId))
  );
  querySnapshot.forEach((doc) => {
    const newDoc = doc.data();
    newDoc.id = doc.id;
    comments.value.push(newDoc);
  });
};
</script>
