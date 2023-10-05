<template>
  <div>
    <router-view/>
    <div class="ml-5 mt-5">
      <div v-for="conference in conferences" v-bind:key="conference">
        <div>
          <img
              v-bind:alt="'Image de la conférence ' + conference.name"
              v-bind:src="conference.image"
          />
        </div>
        <div class="mt-4">
          <b-link class="text-primary" style="text-decoration: none">
            {{ conference.name }}
          </b-link>
        </div>
        <div class="mt-4">{{ conference.description }}</div>
        <div class="mt-4">Durée : {{ conference.duration }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "vue-router";
import {collection, getDocs, query} from "@firebase/firestore";
import {db} from "@/firebase/firebaseInit";
import {onMounted, ref} from "vue";
import moment from "moment";

const route = useRoute();
const conferences = ref([]);

onMounted(async () => {
  await loadConferences();
});

const loadConferences = async () => {
  const querySnapshot = await getDocs(query(collection(db, "conferences")));
  querySnapshot.forEach((doc) => {
    const newDoc = doc.data();
    if (newDoc.date > moment().format("MMMM Do YYYY, HH:mm:ss")) {
      newDoc.id = doc.id;
      conferences.value.push(newDoc);
    }
  });
};
</script>
