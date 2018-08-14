import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store/index'
import Vuelidate from 'vuelidate'

// Vue.use(Vuex);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
