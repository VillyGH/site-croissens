<template>
  <div>
    <video autoplay muted id="backgroundvid">
      <source src="./assets/background.mp4" type="video/mp4" />
    </video>
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
