<template>
  <div class="filtration-section">
    <FilterButton
      @click="loadListCharacters($event), handleClick($event)"
      v-for="name in buttonNames"
      :key="name"
      :text="name"
      :className="name === isActive ? 'active' : 'disable'"
    ></FilterButton>
    <form @submit="handleSubmit" class="search">
      <input
        class="search-input"
        type="search"
        placeholder="Search by name..."
        name="name"
      />
      <button type="submit" class="search-button">search</button>
    </form>
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
      isActive: "All",
    };
  },
  computed: {
    ...mapGetters(["characters"]),
  },
  methods: {
    ...mapActions(["loadListCharacters"]),

    handleSubmit(event: Event) {
      event.preventDefault();
      this.loadListCharacters(event);
    },

    handleClick(event: { target: HTMLInputElement }) {
      this.isActive = event.target.value;
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

.search {
  margin-left: 20px;
}
.search-input {
  outline: none;
  padding: 5px 10px;
}
.search-button {
  padding: 5px 10px;
}
</style>
