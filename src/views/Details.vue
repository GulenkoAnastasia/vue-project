<template>
  <div class="character-detail">
    <CharacterCard :character="this.character"></CharacterCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CharacterCard from "../components/CharacterCard.vue";

export default defineComponent({
  data() {
    return {
      character: {},
      id: this.$route.params.id,
    };
  },
  name: "Details",
  async created() {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/" + this.id
    );
    this.character = await response.json();
  },
  components: {
    CharacterCard,
  },
});
</script>

<style>
.character-detail {
  padding-top: 30px;
}
</style>
