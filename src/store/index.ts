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
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const users = await response.json();

        if (event) {
          switch (event.target.value) {
            case "Human":
              users.results = users.results.filter(
                (character: CharacterInfo) => {
                  return character.species === "Human";
                }
              );
              break;
            case "Alien":
              users.results = users.results.filter(
                (character: CharacterInfo) => {
                  return character.species === "Alien";
                }
              );
              break;
            case "Animal":
              users.results = users.results.filter(
                (character: CharacterInfo) => {
                  return character.species === "Animal";
                }
              );
              break;
          }
        }
        commit("setCharacters", users.results);
      } catch (err) {
        console.log(err);
      }
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
    // filtered(state) {
    //   return state.filtered;
    // },
  },
});

export default store;
