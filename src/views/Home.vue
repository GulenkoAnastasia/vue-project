<template>
  <div class="filtration-section">
    <FilterButton
      v-on:click="handleClick"
      v-for="name in buttonNames"
      :key="name"
      :text="name"
      :classs="isActive"
    ></FilterButton>
  </div>
  <CharacterList></CharacterList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import CharacterList from "../components/CharacterList.vue";
import FilterButton from "../components/FilterButton.vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      buttonNames: ["All", "Human", "Animal", "Alien"],
    };
  },
  computed: {
    ...mapGetters(["characters"]),
  },
  methods: {
    ...mapActions(["loadListCharacters"]),
    handleClick(event: any) {
      this.loadListCharacters(event);
    },
  },
  created() {
    this.$store.dispatch("loadListCharacters");
  },
  components: {
    CharacterList,
    FilterButton,
  },
});
</script>

<style>
.filtration-section {
  padding: 30px;
  display: flex;
  background: lightgray;
}
</style>
