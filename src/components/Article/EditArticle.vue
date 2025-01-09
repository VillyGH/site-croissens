<template>
  <i class="bi bi-pencil-square link align-middle float-right mx-3" @click="changeModalVisibility(true)" />
  <BModal id="modal" v-model="modalShowed" hide-footer v-bind:title="'Modification de l\'article ' + name">
    <label>Titre</label>
    <BFormInput v-model="name" placeholder="Titre" required type="text"/>
    <label class="mt-3">Sous-Titre</label>
    <BFormInput v-model="description" placeholder="Sous Titre" required type="text"/>
    <label class="mt-3">Lien de l'image</label>
    <BFormTextarea v-model="image" placeholder="Lien de l'image" required type="text"/>
    <div class="float-right">
      <BButton class="mr-2 mt-3" variant="primary" @click="modifyArticleCategory">Enregistrer</BButton>
    </div>
  </BModal>
</template>

<script setup>
import {ref} from "vue";
import {doc, updateDoc} from "@firebase/firestore";
import {db} from "@/firebase/firebaseInit";
import {useToast} from "vue-toastification";
import {errorMessages, successMessages} from "@/externalization/constants";
import {BModal, BFormInput, BFormTextarea, BButton} from "bootstrap-vue-next";

const props = defineProps(['category']);
const emit = defineEmits(['editedCategory'])
const name = ref(props.category.name);
const description = ref(props.category.description);
const image = ref(props.category.image);
const modalShowed = ref(false);

const toast = useToast();

const modifyArticleCategory = async () => {
  const categoryData = {
    name: name.value,
    description: description.value,
    image: image.value
  }
  await updateDoc(doc(db, `articleCategories`, props.category.id), categoryData).then(() => {
    toast.success(successMessages.editedArticleCategory);
    changeModalVisibility(false);
    emit('refreshCategories')
  }).catch(() => {
    toast.error(errorMessages.defaultMessage)
  });

};

const changeModalVisibility = (value) => {
  modalShowed.value = value;
};

</script>
