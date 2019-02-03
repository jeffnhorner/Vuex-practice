import Vue from 'vue';
import 'es6-promise/auto'
import Vuex from 'vuex';
import { store } from './store/store/store.js';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
