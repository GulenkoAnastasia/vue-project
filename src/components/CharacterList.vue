<template>
  <CharacterCard
    :key="character.id"
    v-for="character in characters"
    :name="character.name"
  ></CharacterCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import CharacterCard from "../components/CharacterCard.vue";

export default defineComponent({
  data() {
    return {
      text: "Add to Favourites",
      clicked: false,
    };
  },
  name: "CharacterList",
  methods: {
    handleClick() {
      console.log(this.clicked);
    },
  },
  computed: {
    ...mapGetters(["characters", "favourites"]),
  },
  components: {
    CharacterCard,
  },
  created() {
    this.$store.dispatch("loadListCharacters");
  },
});
</script>
