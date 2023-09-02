<template>
  <b-icon-trash-fill @click="changeModalVisibility(true)" class="link align-middle float-right"></b-icon-trash-fill>
  <b-modal v-model="modalShowed" id="modal" hide-footer v-bind:title="'Suppression de la catégorie ' + name">
    <p class="mt-2">Voulez-vous vraiment supprimer la catégorie {{ name }} ?</p>
    <div class="float-right">
      <b-button class="mr-2 mt-3" variant="primary" @click="deleteArticleCategory">Oui</b-button>
      <b-button class="mr-2 mt-3" variant="secondary" @click="changeModalVisibility(false)">Non</b-button>
    </div>
  </b-modal>
</template>

<script setup>
import { getCurrentInstance, ref } from "vue";
import { doc, deleteDoc } from "@firebase/firestore";
import { db } from "@/firebase/firebaseInit";
import { useToast } from "vue-toastification";
import { errorMessages, successMessages } from "@/externalization/constants";

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
