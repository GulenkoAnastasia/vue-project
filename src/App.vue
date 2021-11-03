<template>
  <div id="nav">
    <router-link to="/">Characters</router-link> |
    <router-link to="/favorite">Favourites</router-link>
  </div>
  <div class="favourite-count">Count: {{ favourites.length }}</div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  methods: {},
  computed: {
    ...mapGetters(["favourites"]),
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
