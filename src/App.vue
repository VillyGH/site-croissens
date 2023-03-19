<template>
  <video v-if="currentPath === '/'" id="backgroundVid" autoplay muted>
    <source src="./assets/background-modified.mp4" type="video/mp4" />
  </video>
  <div v-if="isLoading" id="spinner" class="text-center">
    <b-spinner
      variant="info"
    ></b-spinner>
  </div>
  <div v-else>
    <NavigationBar />
    <router-view />
    <BottomNav />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import NavigationBar from "@/components/NavigationBar";
import BottomNav from "@/components/BottomNav";
import { onMounted, ref } from "vue";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/firebase/firebaseInit";
import moment from "moment/moment";

const isLoading = ref(true);

const router = useRouter();

let currentPath = ref(router.currentRoute.value.path);

onAuthStateChanged(auth, () => {
  isLoading.value = false;
});
onMounted(async () => {
  moment.locale("fr");
});

</script>
