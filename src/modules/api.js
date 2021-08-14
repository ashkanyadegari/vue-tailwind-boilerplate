import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.kanye.rest/',
  //   baseURL: '/' + store.state.api,
  //   headers: {"X-CSRF-TOKEN": store.state.csrf}
});
