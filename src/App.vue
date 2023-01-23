<template>
  <NavigationBar />
  <router-view />
  <BottomNav />
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import BottomNav from "@/components/BottomNav";

export default {
  components: {
    NavigationBar,
    BottomNav,
  },
};
</script>
