<template>
    <router-view />
    <h1 class="text-center">Conférences</h1>
    <div class="ml-5 mt-5">
      <div v-for="conference in conferences" :key="conference.id">
        <div>
          <img :alt="'Image de la conférence ' + conference.name" :src="conference.image" />
        </div>
        <div class="mt-4">
          <BLink
              class="text-primary"
              :href="'/conference/' + conference.id"
              style="text-decoration: none"
          >
            {{ conference.name }}
          </BLink>
        </div>
        <div class="mt-4">{{ conference.description }}</div>
        <div class="mt-4">Durée : {{ conference.duration }}</div>
      </div>
    </div>
</template>

<script setup>
import { collection, getDocs, query } from "@firebase/firestore";
import { db } from "@/firebase/firebaseInit";
import { onMounted, ref } from "vue";
import { BLink } from "bootstrap-vue-next";

const conferences = ref([]);

onMounted(async () => {
  await loadConferences();
});

const loadConferences = async () => {
  const querySnapshot = await getDocs(query(collection(db, "conferences")));
  const currentDate = new Date();
  const fetchedConferences = [];

  querySnapshot.forEach((doc) => {
    const newDoc = doc.data();
    const conferenceDate = new Date(newDoc.date);
    if (conferenceDate > currentDate) {
      newDoc.id = doc.id;
      fetchedConferences.push(newDoc);
    }
  });

  conferences.value = fetchedConferences;
};
</script>
