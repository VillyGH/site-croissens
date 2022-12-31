<template>
  <!-- v-bind:class="nav-link {active:$route.name == 'Home'} -->
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-nav mr-auto">
      <router-link
        class="nav-link"
        v-bind:class="{ active: $route.name == 'Home' }"
        v-bind:to="{ name: 'Home' }"
        >Accueil</router-link
      >
      <router-link
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name == 'Map' }"
        v-bind:to="{ name: 'Therapy' }"
        >Thérapie</router-link
      >
      <router-link
        class="nav-link ml-5"
        v-bind:class="{ active: $route.name == 'Psy-Conscience' }"
        v-bind:to="{ name: 'Psy-Conscience' }"
        >Psy-Conscience</router-link
      >
    </div>
    <div class="navbar-nav ml-auto">
      <b-link @click="logout" v-if="isLoggedIn" class="nav-link logout">
        Se déconnecter
      </b-link>

      <router-link
        class="nav-link"
        v-bind:class="{ active: $route.name == 'Login' }"
        v-else
        v-bind:to="{ name: 'Login' }"
      >
        Connexion
      </router-link>
      <router-link
        class="nav-link"
        v-bind:class="{ active: $route.name == 'Register' }"
        v-if="!isLoggedIn"
        v-bind:to="{ name: 'Register' }"
      >
        Inscription
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn () {
      return this.$store.getters['authentication/isLoggedIn']
    }
  },
  methods: {
    // https://stackoverflow.com/questions/52229947/activate-method-on-router-link-click-in-vue
    logout () {
      this.$store.dispatch('authentication/logout')
      this.$router.push({
        name: 'Login'
      })
    }
  }
}
</script>
