<template>
  <div class="app">
    <div v-if="isLoading" id="spinner" class="text-center">
      <b-spinner
          variant="info"
      ></b-spinner>
    </div>
    <div v-else>
      <NavigationBar/>
      <router-view/>
      <BottomNav/>
    </div>
  </div>
</template>

<script setup>
import NavigationBar from "@/components/NavigationBar";
import BottomNav from "@/components/Footer.vue";
import {createApp, onMounted, ref} from "vue";
import {onAuthStateChanged} from "@firebase/auth";
import {auth} from "@/firebase/firebaseInit";
import moment from "moment/moment";

const isLoading = ref(true);

onAuthStateChanged(auth, () => {
  isLoading.value = false;
});

onMounted(async () => {
  moment.locale("fr");
});

</script>
