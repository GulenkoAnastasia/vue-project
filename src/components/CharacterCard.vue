<template>
  <div class="character-card">
    <h1 class="character-name">{{ name }}</h1>

    <button
      class="add-favorite"
      v-on:click="handleClick(), addFavourites(character)"
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "CharacterCard",
  data() {
    return {
      text: "Add to favourites",
    };
  },
  props: ["name"],
  methods: {
    ...mapActions(["addFavourites"]),
  },
});
</script>
