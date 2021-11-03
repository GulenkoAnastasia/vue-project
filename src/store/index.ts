import { CharacterInfo } from "@/types";
import { createStore } from "vuex";

const store = createStore({
  state: {
    baseUrl: "https://rickandmortyapi.com/api",
    characters: [] as Array<CharacterInfo>,
    favourites: JSON.parse(localStorage.getItem("favourite") || "[]"),
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setFavourites(state, favourites) {
      state.favourites = favourites;
    },
  },
  actions: {
    async loadListCharacters({ commit }) {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const users = await response.json();
        commit("setCharacters", users);
      } catch (err) {
        console.log(err);
      }
    },
    addFavourites({ commit }, character) {
      const favourites = JSON.parse(localStorage.getItem("favourite") || "[]");
      favourites.push(character);
      localStorage.setItem("favourite", JSON.stringify(favourites));
      commit("setFavourites", favourites);
    },
  },
  modules: {},
  getters: {
    characters(state) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      return state.characters.results;
    },
    favourites(state) {
      return state.favourites;
    },
  },
});

export default store;
