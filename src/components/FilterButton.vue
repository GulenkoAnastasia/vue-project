<template>
  <input @click="handleClick" type="button" :value="text" :class="className" />
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
  padding: 5px 10px;
  outline: none;
}
.button:hover {
  background: #202020;
  color: white;
}
.active {
  background: #202020;
  color: white;
}
</style>
