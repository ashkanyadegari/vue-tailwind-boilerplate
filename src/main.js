import { createApp } from 'vue';
import Vue from 'vue/dist/vue.esm';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';

import API from './api';

Vue.prototype.$ax = API;

createApp(App).use(store).use(router).mount('#app');
