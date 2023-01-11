<template>
  <div>
    <video autoplay muted id="backgroundvid">
      <source src="./assets/background.mp4" type="video/mp4" />
    </video>
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
  components: {
    NavigationBar,
  },
};
</script>
