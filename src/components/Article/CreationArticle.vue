<template>
  <b-link @click="changeModalVisibility(true)">Créer une catégorie</b-link>
  <b-modal v-model="modalShowed" id="modal" hide-footer title="Création de catégorie d'article">
    <label>Titre</label>
    <b-form-input
      v-model="name"
      placeholder="Titre"
      required
      type="text"
    />
    <label class="mt-3">Sous-Titre</label>
    <b-form-input
      v-model="description"
      placeholder="Sous Titre"
      required
      type="text"
    />
    <label class="mt-3">Lien de l'image</label>
    <b-form-textarea
      v-model="image"
      placeholder="Lien de l'image"
      required
      type="text"
    />
    <div class="float-right">
    <b-button class="mr-2 mt-3" variant="primary" @click="createArticleCategory">Ajouter</b-button>
    <b-button class="ml-2 mt-3" variant="secondary" @click="changeModalVisibility(false)">Fermer</b-button>
    </div>
  </b-modal>
</template>

<script setup>
import { ref } from "vue";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "@/firebase/firebaseInit";
import { useToast } from "vue-toastification";

const name = ref("");
const description = ref("");
const image = ref("");
const modalShowed = ref(false);

const toast = useToast();

const createArticleCategory = async () => {
    const categoryData = {
      name: name.value,
      description: description.value,
      image: image.value
    }
    await addDoc(collection(db, `articleCategories`), categoryData);
    toast.success("La catégorie d'article a bien été créée !");
    changeModalVisibility(false);
};

const changeModalVisibility = (value) => {
  modalShowed.value = value;
};

</script>
