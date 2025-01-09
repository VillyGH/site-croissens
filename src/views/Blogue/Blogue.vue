<template>
  <router-view />
  <div class="ms-5 mt-5">
    <h1 class="text-center">Blogue</h1>
    <h3>Catégories d'article</h3>
    <div class="row mb-4">
      <div
          v-for="category in articleCategories"
          :key="category.id"
          class="col-md-4 mb-4"
      >
        <div class="card">
          <img
              class="card-img-top"
              :alt="'Image de la catégorie ' + category.name"
              :src="category.image"
              @click="goToCategory(category.name)"
              style="cursor: pointer;"
          />
          <div class="card-body">
            <h5
                class="card-title"
                @click="goToCategory(category.name)"
                style="cursor: pointer;"
            >
              {{ category.name }}
            </h5>
            <div class="d-flex justify-content-between">
              <DeleteCategory :category="category" @refreshCategories="loadCategories" />
              <EditCategory :category="category" @refreshCategories="loadCategories" />
            </div>
            <p class="card-text mt-4">
              {{ category.description }}
            </p>
          </div>
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
  const querySnapshot = await getDocs(query(collection(db, "articleCategories")));
  querySnapshot.forEach((doc) => {
    const newDoc = doc.data();
    newDoc.id = doc.id;
    articleCategories.value.push(newDoc);
  });
  articleCategories.value.sort((a, b) =>
      a.name > b.name ? 1 : a.name < b.name ? -1 : 0
  );
};

const goToCategory = (categoryName) => {
  router.push({ name: "Categorie Article", params: { name: categoryName } });
};
</script>
