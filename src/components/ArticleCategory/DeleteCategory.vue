<template>
  <i class="bi bi-trash-fill link align-middle float-right" @click="changeModalVisibility(true)" />
  <BModal id="modal" v-model="modalShowed" no-footer v-bind:title="'Suppression de la catégorie ' + name">
    <p class="mt-2">Voulez-vous vraiment supprimer la catégorie {{ name }} ?</p>
    <div class="float-right text-center">
      <BButton class="mx-2 mt-3" variant="danger" @click="deleteArticleCategory">Oui</BButton>
      <BButton class="mx-2 mt-3" variant="primary" @click="changeModalVisibility(false)">Non</BButton>
    </div>
  </BModal>
</template>

<script setup>
import {ref} from "vue";
import {deleteDoc, doc} from "@firebase/firestore";
import {db} from "@/firebase/firebaseInit";
import {useToast} from "vue-toastification";
import {errorMessages, successMessages} from "@/externalization/constants";
import {BModal, BButton} from "bootstrap-vue-next";

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
