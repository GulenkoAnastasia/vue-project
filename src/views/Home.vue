<template>
  <div class="home"></div>
  <CharacterList></CharacterList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CharacterList from "../components/CharacterList.vue";

export default defineComponent({
  name: "Home",
  components: {
    CharacterList,
  },
});
</script>
