<template>
  <div class="background">
    <NavigationBar />
    <main>
      <router-view />
    </main>
    <BottomNav />
  </div>
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
