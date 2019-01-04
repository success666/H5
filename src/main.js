import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

import vant from 'vant';
import 'vant/lib/vant-css/index.css';
import { Loading } from 'vant';

Vue.use(Loading);

Vue.use(vant);




new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
