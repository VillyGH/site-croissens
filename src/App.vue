<template>
  <div>
    <NavigationBar />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}
</style>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
  components: {
    NavigationBar,
  },
};
</script>
