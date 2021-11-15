<template>
  <div class="filtration-section">
    <FilterButton
      @click="
        loadListCharacters({
          page: page,
          species: species,
          name: this.name,
        }),
          handleClick($event)
      "
      v-for="name in buttonNames"
      :key="name"
      :text="name"
      :className="name === isActive ? 'btn active' : 'btn disable'"
    ></FilterButton>

    <form @submit.prevent="handleSubmit($event)" class="search">
      <input
        class="search-input"
        type="search"
        placeholder="Search by name..."
        name="name"
      />

      <button type="submit" class="search-button">
        <router-link
          :to="{
            name: 'Home',
            query: { page: this.page, name: this.name },
          }"
        >
        </router-link>

        search
      </button>
    </form>
  </div>
  <CharacterList></CharacterList>
  <router-link
    :to="{
      name: 'Home',
      query: { page: page - 1, species: species, name: this.name },
    }"
    rel="prev"
    v-if="page != 1"
    >Previous</router-link
  >

  <router-link
    :to="{
      name: 'Home',
      query: { page: page + 1, species: species, name: this.name },
    }"
    rel="next"
    >Next</router-link
  >
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { mapActions, mapGetters } from "vuex";
import CharacterList from "../components/CharacterList.vue";
import FilterButton from "../components/FilterButton.vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      buttonNames: ["All", "Human", "Animal", "Alien"],
      isActive: "All",
      name: "",
    };
  },
  props: ["page", "species"],
  computed: {
    ...mapGetters(["characters"]),
  },
  methods: {
    ...mapActions(["loadListCharacters"]),

    handleSubmit(event: any) {
      this.name = event.target["name"].value;
      this.loadListCharacters({
        page: this.page,
        species: this.species,
        name: this.name,
      });
    },

    handleClick(event: { target: HTMLInputElement }) {
      this.isActive = event.target.innerHTML;
    },
  },
  created() {
    watchEffect(() => {
      this.loadListCharacters({
        page: this.page,
        species: this.species,
        name: this.name,
      });
    });
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
