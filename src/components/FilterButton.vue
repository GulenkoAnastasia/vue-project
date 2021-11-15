<template>
  <router-link
    :to="{ name: 'Home', query: { species: text.toLowerCase() } }"
    v-if="text !== 'All'"
  >
    <button :class="className">
      {{ text }}
    </button>
  </router-link>
  <router-link :to="{ name: 'Home' }" v-else>
    <button :class="className">
      {{ text }}
    </button></router-link
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterButton",
  props: ["text", "className"],
});
</script>

<style>
.disable {
  background: lightgray;
}
.active {
  background: #202020;
  color: white;
}

.btn {
  padding: 5px 10px;
}
</style>
