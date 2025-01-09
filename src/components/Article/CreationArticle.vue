<template>
  <BLink @click="changeModalVisibility(true)">Créer une catégorie</BLink>
  <BModal id="modal" v-model="modalShowed" hide-footer title="Création de catégorie d'article">
    <label>Titre</label>
    <BFormInput v-model="name" placeholder="Titre" required type="text"/>
    <label class="mt-3">Sous-Titre</label>
    <BFormInput v-model="description" placeholder="Sous Titre" required type="text"/>
    <label class="mt-3">Lien de l'image</label>
    <BFormTextarea v-model="image" placeholder="Lien de l'image" required type="text"/>
    <div class="float-right">
      <BButton class="mr-2 mt-3" variant="primary" @click="createArticleCategory">Ajouter</BButton>
      <BButton class="ml-2 mt-3" variant="secondary" @click="changeModalVisibility(false)">Fermer</BButton>
    </div>
  </BModal>
</template>

<script setup>
import {ref} from "vue";
import {addDoc, collection} from "@firebase/firestore";
import {db} from "@/firebase/firebaseInit";
import {useToast} from "vue-toastification";
import {BLink, BModal, BFormInput, BFormTextarea, BButton} from "bootstrap-vue-next";

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
