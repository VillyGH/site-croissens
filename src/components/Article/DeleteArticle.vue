<template>
  <b-icon-trash-fill class="link align-middle float-right" @click="changeModalVisibility(true)"></b-icon-trash-fill>
  <b-modal id="modal" v-model="modalShowed" hide-footer v-bind:title="'Suppression de la catégorie ' + name">
    <p class="mt-2">Voulez-vous vraiment supprimer la catégorie {{ name }} ?</p>
    <div class="float-right">
      <b-button class="mr-2 mt-3" variant="primary" @click="deleteArticleCategory">Oui</b-button>
      <b-button class="mr-2 mt-3" variant="secondary" @click="changeModalVisibility(false)">Non</b-button>
    </div>
  </b-modal>
</template>

<script setup>
import {getCurrentInstance, ref} from "vue";
import {deleteDoc, doc} from "@firebase/firestore";
import {db} from "@/firebase/firebaseInit";
import {useToast} from "vue-toastification";
import {errorMessages, successMessages} from "@/externalization/constants";

const instance = getCurrentInstance();
const props = defineProps(['category']);
const emit = defineEmits(['deletedCategory'])
const name = ref(props.category.name);
const modalShowed = ref(false);

const toast = useToast();

const deleteArticleCategory = async () => {
  await deleteDoc(doc(db, `articleCategories`, props.category.id)).then(() => {
    toast.success(successMessages.deletedArticleCategory);
    changeModalVisibility(false);
    emit('refreshCategories')
  }).catch(() => {
    toast.error(errorMessages.defaultMessage)
  })

};

const changeModalVisibility = (value) => {
  modalShowed.value = value;
};

</script>
