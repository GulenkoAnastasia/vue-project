<template>
  <div class="favourites-list">
    <CharacterCard
      v-for="favourite in favourites"
      :key="favourite.id"
      :character="favourite"
    ></CharacterCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import CharacterCard from "../components/CharacterCard.vue";

export default defineComponent({
  name: "Favourites",
  computed: {
    ...mapGetters(["favourites"]),
  },
  components: {
    CharacterCard,
  },
});
</script>

<style>
.favourites-list {
  display: flex;
  justify-content: space-around;
  padding-top: 30px;
  flex-wrap: wrap;
}
</style>
