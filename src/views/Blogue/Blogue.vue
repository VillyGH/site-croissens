<template>
  <router-view />
  <div class="ml-5 mt-5">
    <h1 class="text-center">Blogue</h1>
    <h3>Catégories d'article</h3>
    <div class="row mb-4">
      <div
        v-for="category in articleCategories"
        v-bind:key="category"
        class="ml-5"
      >
        <div class="card">
          <b-card-img @click="goToCategory(category.name)" v-bind:src="category.image" v-bind:alt="'Image de la catégorie ' + category.name"></b-card-img>
          <b-card-body>
            <b-card-title @click="goToCategory(category.name)">{{category.name}}</b-card-title>
            <DeleteCategory :category=category @refreshCategories="loadCategories" />
            <EditCategory :category=category @refreshCategories="loadCategories" />
            <b-card-text class="mt-4">


              {{ category.description }}
            </b-card-text>
          </b-card-body>
        </div>
      </div>
    </div>
    <CreationCategory />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { db } from "@/firebase/firebaseInit";
import { collection, getDocs, query } from "@firebase/firestore";
import CreationCategory from "@/components/ArticleCategory/CreationCategory.vue";
import EditCategory from "@/components/ArticleCategory/EditCategory.vue";
import DeleteCategory from "@/components/ArticleCategory/DeleteCategory.vue";

const articleCategories = ref([]);
const router = useRouter();
onMounted(async () => {
  await loadCategories();
});

const loadCategories = async () => {
  articleCategories.value = [];
  const querySnapshot = await getDocs(
    query(collection(db, "articleCategories"))
  );
  querySnapshot.forEach((doc) => {
    const newDoc = doc.data();
    newDoc.id = doc.id;
    articleCategories.value.push(newDoc);
  });
  articleCategories.value.sort(function(a, b) {
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
  });
};

const goToCategory = (categoryName) => {
  router.push({ name: "Categorie Article", params: { name: categoryName } });
};
</script>
