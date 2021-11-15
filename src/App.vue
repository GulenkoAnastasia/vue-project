<template>
  <div id="nav" class="navigation">
    <div>
      <router-link to="/">Characters</router-link> |
      <router-link to="/favourites">Favourites</router-link>
    </div>
    <div class="favourite-count">Count: {{ favourites.length }}</div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters(["favourites"]),
  },
});
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
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
  color: #989898;
}

#nav a.router-link-exact-active {
  color: white;
}
.navigation {
  display: flex;
  justify-content: space-between;
  background: #202020;
  color: white;
}
</style>
