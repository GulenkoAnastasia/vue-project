<template>
  <input :v-on:click="handleClick" type="button" :value="text" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      isActive: false,
    };
  },
  name: "FilterButton",
  props: ["text"],
  methods: {
    handleClick() {
      this.isActive = true;
    },
  },
});
</script>

<style>
.button {
  background: lightgray;
  border: 1px solid #202020;
  padding: 5px;
}
.button:hover {
  background: #202020;
  color: white;
}
.active {
  background: red;
}
</style>
