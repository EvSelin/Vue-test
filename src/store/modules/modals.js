const state = {
  showModal: false
};

const mutation = {
  triggerModal() {
    return this.state.showModal = true
  }
};

const actions = {

};

const getters = {

  showModal() {
    return state.showModal
  }
};

export default {
  state,
  mutation,
  actions,
  getters
}
