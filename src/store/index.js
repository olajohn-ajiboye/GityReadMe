import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    repos: [],
    readme: ''
  },
  mutations: {
    recieve_repo_data(state, payload) {
      state.repos = payload;
    },
    recieve_readme_data(state, payload) {
      state.readme = payload;
    }
  }
});
