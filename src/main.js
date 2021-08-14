import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';
import API from './modules/api';

const app = createApp(App).use(store).use(router);

app.config.globalProperties.$axios = API;

app.mount('#app');
