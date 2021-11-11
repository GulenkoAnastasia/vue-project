<template>
  <div class="character-list">
    <CharacterCard
      :key="character.id"
      v-for="character in characters"
      :character="character"
    ></CharacterCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import CharacterCard from "../components/CharacterCard.vue";

export default defineComponent({
  name: "CharacterList",
  computed: {
    ...mapGetters(["characters"]),
  },
  components: {
    CharacterCard,
  },
});
</script>

<style>
.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 30px;
}
</style>
