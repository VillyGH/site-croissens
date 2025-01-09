<template>
  <router-view/>
  <div class="ml-5 mt-5">
    <h1 class="text-center">{{ $route.params.name }}</h1>
    <div v-for="article in articles" v-bind:key="article">
      <div class="card">
        <BCardImg v-bind:alt="'Image de la catégorie ' + article.name" v-bind:src="article.image"
                    @click="goToArticle(article.id)"></BCardImg>
        <BCardBody>
          <BCardTitle @click="goToArticle(article.id)">{{ article.name }}</BCardTitle>
          <DeleteArticle :article=article @refreshCategories="loadCategories" />
          <EditArticle :article=article @refreshCategories="loadCategories" />
          <BCardText class="mt-4">
            {{ article.description }}
          </BCardText>
        </BCardBody>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {db} from "@/firebase/firebaseInit";
import {collection, getDocs, query, where} from "@firebase/firestore";
import {BCardImg, BCardBody, BCardTitle, BCardText} from "bootstrap-vue-next";

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
