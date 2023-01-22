<template>
  <div>
    <video autoplay muted id="backgroundvid">
      <source src="../assets/background-modified.mp4" type="video/mp4" />
    </video>
    <router-view />
    <p class="ml-5 mt-5">Bienvenue dans mon site !</p>
    <p class="ml-5 mt-5">Ce site est en développement</p>
    <div style="height: 500px"></div>
  </div>
</template>
