<template>
  <div class="detail">
    <router-link :to="{ name: 'Details', params: { id: character.id } }">
      <img :src="character.image" :alt="character.name" />
      <div class="character-info">
        <h1 class="character-name">{{ character.name }}</h1>
        <span class="character-status"
          >{{ character.species }} - {{ character.status }}</span
        >
        <div class="character-location">
          <div>Last known location: {{ character.location.name }}</div>
          <div class="episode">First seen in: {{ firstEpisode }} episode</div>
        </div>
        <button
          class="add-favourite"
          v-on:click.prevent="
            addFavourites({ character, clicked: isFavourite })
          "
        >
          {{ isFavourite ? "Remove" : "Add to favourites" }}
        </button>
      </div>
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
    firstEpisode() {
      const episodeLink = this.character.episode[0].split("/");
      return episodeLink.pop();
    },
  },

  props: ["character", "className"],
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
  font-weight: 500;
}
.detail {
  border: 2px solid grey;
  margin-bottom: 10px;
}
.character-name {
  color: #8b0000;
  font-size: 18px;
  font-weight: bold;
}
.add-favourite {
  background: #202020;
  color: white;
  border: none;
  margin: 5px;
  padding: 5px;
}
.character-info {
  padding: 10px;
}
.character-location {
  display: none;
  font-size: 16px;
}
.episode {
  padding-top: 10px;
  margin-bottom: 15px;
}
</style>
