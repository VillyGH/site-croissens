<template>
  <div>
    <router-view/>
    <div class="ml-5 mt-5">
      <h1 class="text-center">{{ article.name }}</h1>
      <img
          class="categorieArticleImg"
          v-bind:alt="'Image de la catégorie ' + article.name"
          v-bind:src="article.image"
      />
      <div class="mt-4 text-secondary">{{ article.description }}</div>
      <div class="mt-4 justify-text">{{ article.text }}</div>
      <Comments :article-id="this.$route.params.id"/>
    </div>
  </div>
</template>

<script setup>
import Comments from "@/components/Comments.vue";
import {useRoute} from "vue-router";
import {doc, getDoc} from "@firebase/firestore";
import {db} from "@/firebase/firebaseInit";
import {onMounted, ref} from "vue";

const route = useRoute();
const article = ref({});

onMounted(async () => {
  await loadArticle();
});

const loadArticle = async () => {
  const articleDoc = await getDoc(doc(db, "articles", route.params.id));
  if (articleDoc.exists()) {
    article.value.id = articleDoc.id;
    article.value = articleDoc.data();
  }
};
</script>
