import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import modals from './modules/modals'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    modals
  }
});

export default store
