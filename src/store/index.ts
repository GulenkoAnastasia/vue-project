import { CharacterInfo } from "@/types";
import { createStore } from "vuex";

const store = createStore({
  state: {
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
    async loadListCharacters({ commit }, event) {
      let response = await fetch("https://rickandmortyapi.com/api/character");

      if (event) {
        if (event.type === "click" && event.target.value !== "All") {
          response = await fetch(
            `https://rickandmortyapi.com/api/character/?species=${event.target.value}`
          );
        }
        if (event.type === "submit") {
          response = await fetch(
            `https://rickandmortyapi.com/api/character/?name=${event.target["name"].value}`
          );
        }
      }
      const users = await response.json();
      commit("setCharacters", users.results);
    },
    addFavourites({ commit }, params) {
      const favourites = JSON.parse(localStorage.getItem("favourite") || "[]");

      if (!params.clicked) {
        favourites.push(params.character);
      } else {
        const index = favourites.findIndex(
          (element: CharacterInfo) => element.id === params.character.id
        );
        favourites.splice(index, 1);
      }

      localStorage.setItem("favourite", JSON.stringify(favourites));
      commit("setFavourites", favourites);
    },
  },
  modules: {},
  getters: {
    characters(state) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      return state.characters;
    },
    favourites(state) {
      return state.favourites;
    },
  },
});

export default store;
