<template>
  <div>
    <router-view />
    <div class="ml-5 mt-5">
      <h1 class="text-center">Blogue</h1>
      <h3>Catégories d'article</h3>
      <div v-bind:key="category" v-for="category in articleCategories">
        <div @click="goToCategory(category.name)" class="categorieArticleImg">
          <img
            class="categorieArticleImg"
            v-bind:src="category.image"
            v-bind:alt="'Image de la catégorie ' + category.name"
          />
        </div>
        <div class="mt-4">
          <b-link
            class="text-primary"
            @click="goToCategory(category.name)"
            style="text-decoration: none"
          >
            {{ category.name }}
          </b-link>
        </div>

        <div class="mt-4">{{ category.description }}</div>
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
};

const goToCategory = (categoryName) => {
  router.push({ name: "Categorie Article", params: { name: categoryName } });
};
</script>
