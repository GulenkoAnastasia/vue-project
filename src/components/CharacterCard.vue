<template>
  <div class="detail">
    <router-link
      :to="{ name: 'Details', params: { id: character.id } }"
      class="character-card"
    >
      <img :src="character.image" :alt="character.name" />
      <h1 class="character-name">{{ character.name }}</h1>
      <span class="character-status"
        >{{ character.species }} - {{ character.status }}</span
      >
      <button
        class="add-favourite"
        v-on:click.prevent="addFavourites({ character, clicked: isFavourite })"
      >
        {{ isFavourite ? "Remove" : "Add to favourites" }}
      </button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { CharacterInfo } from "@/types";
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "CharacterCard",
  computed: {
    ...mapGetters(["favourites"]),
    isFavourite() {
      return this.checkIsFavorite(this.character.id);
    },
  },

  props: ["character"],
  methods: {
    ...mapActions(["addFavourites"]),

    checkIsFavorite(id: number) {
      const hasFavourite = this.favourites.find(
        (element: CharacterInfo) => element.id === id
      );
      return Boolean(hasFavourite);
    },
  },
});
</script>

<style>
.character-status {
  display: block;
  color: black;
}
.detail {
  border: 2px solid grey;
  margin-bottom: 10px;
}
.character-name {
  color: red;
}
.add-favourite {
  background: #202020;
  color: white;
  border: none;
  margin: 10px;
  padding: 5px;
}
</style>
