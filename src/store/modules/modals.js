export default {

  state: {
    visibility: false,
    isComponent: ''
  },

  mutations: {
    show(state, component) {
      state.visibility = true;
      state.isComponent = component;
    },

    close(state) {
      state.visibility = false;
    }
  },

  actions: {
    showModal(context, component) {
      context.commit('show', component);
    },

    closeModal(context) {
      context.commit('close')
    }
  },

  getters: {}
}
