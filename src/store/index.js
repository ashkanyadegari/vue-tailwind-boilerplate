import { createStore } from 'vuex';

export default createStore({
  state: {
    path: {
      development: `${origin}/`,
      production: `${origin}/`,
      staging: `${origin}/`,
    },
    api: 'api/v1/',

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
