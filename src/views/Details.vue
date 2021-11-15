<template>
  <div class="character-detail">
    <CharacterCard
      :character="this.character"
      class="detail-page"
    ></CharacterCard>
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
.detail-page {
  margin: 30px;
}
.detail-page .router-link-exact-active {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.detail-page .character-name {
  font-size: 36px;
  font-weight: bold;
  margin: 20px;
}
.detail-page .character-location {
  display: block;
  font-size: 18px;
  margin: 20px;
}
.detail-page .character-status {
  font-size: 22px;
  margin-bottom: 20px;
}
.episode {
  margin: 20px;
}
.detail-page .add-favourite {
  height: 40px;
  width: 150px;
  font-size: 18px;
}
</style>
