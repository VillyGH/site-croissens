<template>
  <div class="app container d-flex flex-column min-vh-100">
    <main class="flex-fill ">
      <div v-if="isLoading" id="spinner" class="text-center">
        <BSpinner variant="info"></BSpinner>
      </div>
      <div v-else>
        <NavigationBar/>
        <router-view/>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer.vue";
import {onMounted, ref} from "vue";
import {onAuthStateChanged} from "@firebase/auth";
import {auth} from "@/firebase/firebaseInit";
import moment from "moment/moment";
import {BSpinner} from "bootstrap-vue-next";

const isLoading = ref(true);

onAuthStateChanged(auth, () => {
  isLoading.value = false;
});

onMounted(async () => {
  moment.locale("fr");
});

</script>
