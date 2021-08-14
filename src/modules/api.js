import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000/api',
  //   baseURL: '/' + store.state.api,
  //   headers: {"X-CSRF-TOKEN": store.state.csrf}
});
