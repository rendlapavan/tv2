import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    show: [],
    popular: [],
    searchShows: [],
    catShows: [],
    searchText: "",
  },
  mutations: {
    SET_SHOW(state, data) {
      state.show = data;
    },
    SET_SEARCH_SHOWS(state, data) {
      state.searchShows = data;
    },
    SET_POPULAR(state, data) {
      state.popular = data;
    },
    SET_CAT_SHOWS(state, data) {
      state.catShows = data;
    },
  },
  actions: {
    async getShows({ dispatch }) {
      await axios.get("https://api.tvmaze.com/shows").then((response) => {
        dispatch("categorise", response.data);
      });
    },
    categorise({ commit }, data) {
      const popular = data.filter((show) => {
        return show.rating.average >= 9 ? show : "";
      });
      commit("SET_POPULAR", popular);
      const allGenres = data.map((show) => show.genres).flat();
      var genres = [];
      genres = allGenres.filter((genre) => {
        return !genres.includes(genre) ? genres.push(genre) : "";
      });
      const finalShows = genres.map((genre) => {
        const details = data.filter((show) => show.genres.includes(genre));
        details.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        );
        return { name: genre, details };
      });
      commit("SET_CAT_SHOWS", finalShows);
    },
    async getShowsSearch({ commit }, show) {
      await axios
        .get(`https://api.tvmaze.com/search/shows?q=${show}`)
        .then((response) => {
          const sData = response.data.map((data) => {
            return data.show;
          });
          commit("SET_SEARCH_SHOWS", sData);
        });
    },
    async getShowById({ commit }, id) {
      await axios.get(`http://api.tvmaze.com/shows/${id}`).then((response) => {
        commit("SET_SHOW", response.data);
      });
    },
  },
  getters: {
    
  },
  modules: {},
});
