<template>
  <router-view />
  <div class="ml-5 mt-5">
    <h1 class="text-center">Blogue</h1>
    <h3>Catégories d'article</h3>
    <div style="display: flex; flex-direction: row; align-items: flex-start">
      <div
        class="ml-5"
        v-bind:key="category"
        v-for="category in articleCategories"
      >
        <b-card
          @click="goToCategory(category.name)"
          v-bind:title="category.name"
          v-bind:img-src="category.image"
          v-bind:img-alt="'Image de la catégorie ' + category.name"
          class="mt-5 mb-2 card"
        >
          <b-card-text class="mt-4">
            {{ category.description }}
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { db } from "@/firebase/firebaseInit";
import { collection, getDocs, query } from "@firebase/firestore";

const articleCategories = ref([]);
const router = useRouter();
onMounted(async () => {
  await loadCategories();
});

const loadCategories = async () => {
  const querySnapshot = await getDocs(
    query(collection(db, "articleCategories"))
  );
  querySnapshot.forEach((doc) => {
    const newDoc = doc.data();
    newDoc.id = doc.id;
    articleCategories.value.push(newDoc);
  });
  articleCategories.value.sort(function (a, b) {
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
  });
};

const goToCategory = (categoryName) => {
  router.push({ name: "Categorie Article", params: { name: categoryName } });
};
</script>
