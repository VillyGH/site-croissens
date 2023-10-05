<template>
  <router-view/>
  <div class="ml-5 mt-5">
    <h1 class="text-center">{{ $route.params.name }}</h1>
    <div v-for="article in articles" v-bind:key="article">
      <div class="card">
        <b-card-img v-bind:alt="'Image de la catégorie ' + article.name" v-bind:src="article.image"
                    @click="goToArticle(article.id)"></b-card-img>
        <b-card-body>
          <b-card-title @click="goToArticle(article.id)">{{ article.name }}</b-card-title>
          <!--<DeleteArticle :article=article @refreshCategories="loadCategories" />
          <EditArticle :article=article @refreshCategories="loadCategories" />-->
          <b-card-text class="mt-4">
            {{ article.description }}
          </b-card-text>
        </b-card-body>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {db} from "@/firebase/firebaseInit";
import {collection, getDocs, query, where} from "@firebase/firestore";

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

const showModal = () => {

};

const goToArticle = (articleId) => {
  router.push({name: "Article", params: {id: articleId}});
};
</script>
