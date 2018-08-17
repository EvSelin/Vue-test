import axios from 'axios'

const state = {
  token: sessionStorage.getItem('access_token') || null,
};

const mutation = {

};

const actions = {

  registration({ commit }, { ...args }) {
    console.log(args);

    return new Promise((resolve, reject) => {
      axios.post('httpbin.org/anything', {
          model: args
        })
        .then( response => {
          resolve(response)
        })
        .catch( error => {
          reject(error)
      })
    })
  },

  authorization({ commit }, { ...args }) {
    console.log(args);

    return new Promise((resolve, reject) => {
      axios.get('/author', {
        model: args
      })
        .then( response => {
          resolve(response)
        })
        .catch( error => {
          reject(error)
        })
    })
  }
};

const getters = {

  loggedIn() {
    return state.token !== null
  }
};

export default {
  state,
  mutation,
  actions,
  getters
}
