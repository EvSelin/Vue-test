import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import modals from './modules/modals'

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    modalVisible: false
  },

  mutations: {
    showModal(state, value) {
      state.modalVisible = value;
    }
  },

  actions: {
    triggerModal(context, value) {
      context.commit('showModal', value);
    }
  },

  modules: {
    auth,
    modals
  }
});
