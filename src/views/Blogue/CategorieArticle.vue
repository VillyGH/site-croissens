<template>
  <div>
    <router-view />
    <div class="ml-5 mt-5">
      <h1 class="text-center">{{ $route.params.name }}</h1>
      <div v-bind:key="article" v-for="article in articles">
        <div @click="goToArticle(article.id)" class="categorieArticleImg">
          <img
            class="categorieArticleImg"
            v-bind:src="article.image"
            v-bind:alt="'Image de la catégorie ' + article.name"
          />
        </div>
        <div class="mt-4">
          <b-link
            class="text-primary"
            @click="goToArticle(article.id)"
            style="text-decoration: none"
          >
            {{ article.name }}
          </b-link>
        </div>

        <div class="mt-4">{{ article.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { db } from "@/firebase/firebaseInit";
import { collection, getDocs, query, where } from "@firebase/firestore";

const articles = ref([]);
const router = useRouter();
const route = useRoute();
onMounted(async () => {
  await loadCategories();
});

const loadCategories = async () => {
  const querySnapshot = await getDocs(
    query(
      collection(db, "articles"),
      where("category", "==", route.params.name)
    )
  );
  querySnapshot.forEach((doc) => {
    const newDoc = doc.data();
    newDoc.id = doc.id;
    articles.value.push(newDoc);
  });
};

const goToArticle = (articleId) => {
  router.push({ name: "Article", params: { id: articleId } });
};
</script>
