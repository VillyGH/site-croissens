<template>
  <video v-if="currentPath === '/'" autoplay muted id="backgroundVid">
    <source src="./assets/background-modified.mp4" type="video/mp4" />
  </video>
  <div v-if="isLoading" class="text-center" id="spinner">
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
import { useRouter } from 'vue-router'
import NavigationBar from "@/components/NavigationBar";
import BottomNav from "@/components/BottomNav";
import { ref } from "vue";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "@/firebase/firebaseInit";

const isLoading = ref(true);

const router = useRouter()

let currentPath = ref(router.currentRoute.value.path);
console.log(currentPath.value)


onAuthStateChanged(auth, (user) => {
  isLoading.value = false;
});
</script>
