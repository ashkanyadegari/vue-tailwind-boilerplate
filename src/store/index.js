import { createStore } from 'vuex';
import page from './page_example';

export default createStore({
  state: {
    path: {
      development: `${origin}/`,
      production: `${origin}/`,
      staging: `${origin}/`,
    },
    api: 'api/v1/',

  },
  modules: {
    page,
  },
  mutations: {
  },
  actions: {
  },
});
