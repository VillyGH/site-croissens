<template>
  <b-col sm="4">
    <h3 class="mt-5">Ajouter un Commentaire</h3>
    <div v-if="isLoggedIn">
      <b-form-textarea
        required
        v-model="createdComment"
        max-rows="6"
        placeholder="Écrire un commentaire"
        rows="5"
        sm="2"
      ></b-form-textarea>
      <b-button class="mt-4" variant="primary" @click="createComment">Envoyer</b-button>
      <span class="text-success" style="vertical-align: center">{{ successMessage }}</span>
    </div>
    <div v-else>
      <h5>Vous devez être connecté pour publier un commentaire</h5>
    </div>
    <div class="mt-3 mb-3 text-danger">{{ errorMessage }}</div>
    <h3 v-if="comments.length !== 0">{{ comments.length }} Commentaires</h3>
    <div v-for="comment in comments" v-bind:key="comment" class="mb-6">
      <div>{{ comment.owner }}</div>
      <div>
        <span v-if="comment.modified">Modifié </span>
        {{ moment(comment.date, "MMMM Do YYYY, HH:mm:ss").fromNow() }}
      </div>
      <div class="mb-4">
        <textarea
          id="comment"
          v-model="comment.text"
          class="input-message mt-3"
          cols="45"
          required
          rows="1"
          v-bind:disabled="editedCommentId !== comment.id"
        ></textarea>
        <a v-if="isLoggedIn && comment.owner === username" class="ml-4" @click="changeEditMode(comment.id)">
          <b-icon-pencil-square style="vertical-align: 0.5em"></b-icon-pencil-square>
        </a>
        <div class="mt-2">
          <a class="button ml-3" @click="likeComment(comment)" style="color: green">
            <b-icon-hand-thumbs-up-fill v-if="isCommentLiked(comment)"></b-icon-hand-thumbs-up-fill>
            <b-icon-hand-thumbs-up v-else></b-icon-hand-thumbs-up>
            <span class="ml-2">{{ comment.likes.length }}</span>
          </a>
          <a class="button ml-4" @click="dislikeComment(comment)" style="color: red">
            <b-icon-hand-thumbs-down-fill v-if="isCommentDisliked(comment)"></b-icon-hand-thumbs-down-fill>
            <b-icon-hand-thumbs-down v-else style=""></b-icon-hand-thumbs-down>
            <span class="ml-2">{{ comment.dislikes.length }}</span>
          </a>
        </div>
        <div>
          <b-button
            id="confirmEditBtn"
            class="mt-2"
            v-bind:hidden="editedCommentId !== comment.id"
            variant="primary"
            @click="editComment(comment)"
          >Confirmer
          </b-button
          >
          <b-button
            id="confirmEditBtn"
            class="mt-2"
            v-bind:hidden="editedCommentId !== comment.id"
            variant="secondary"
            @click="changeEditMode(comment.id)"
          >Annuler
          </b-button
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
      likes: [],
      dislikes: []
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
      modified: true
    };
    let newComment = await updateDoc(doc(db, "comments", comment.id), commentData);
    if(newComment) {
      window.location.reload();
    }
    editErrorMessage.value = "";

  } else {
    editErrorMessage.value =
      "Le commentaire doit avoir entre 3 et 450 caractères";
  }
};

const removeElement = (array, value) => {
  let index = array.indexOf(value);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

const likeComment = async (comment) => {
  if(isCommentLiked(comment)) {
    comment.likes = removeElement(comment.likes, auth.currentUser.uid);
  } else {
    comment.likes.push(auth.currentUser.uid);
  }
  await updateDoc(doc(db, "comments", comment.id), {likes: comment.likes});
};

const dislikeComment = async (comment) => {
  if(isCommentDisliked(comment)) {
    comment.dislikes = removeElement(comment.dislikes, auth.currentUser.uid);
  } else {
    comment.dislikes.push(auth.currentUser.uid);
  }
  await updateDoc(doc(db, "comments", comment.id), {dislikes: comment.dislikes});
};

const isCommentLiked = (comment) => {
  return comment.likes.length !== 0 && comment.likes.includes(auth.currentUser.uid);
}

const isCommentDisliked = (comment) => {
  return comment.dislikes.length !== 0 && comment.dislikes.includes(auth.currentUser.uid);
}

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
