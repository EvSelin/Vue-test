export default {

  state: {
    visibility: false
  },

  mutations: {
    showModal(state, value) {
      state.visibility = value;
    }
  },

  actions: {
    triggerModal(context, value) {
      context.commit('showModal', value);
    }
  },

  getters: {}
}
