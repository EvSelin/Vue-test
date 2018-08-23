import axios from 'axios'

export default {

  state: {
    token: sessionStorage.getItem('access_token') || null,
  },

  mutations: {},

  actions: {

    registration({commit}, {...args}) {
      console.log(args);

      return new Promise((resolve, reject) => {
        axios.post('httpbin.org/anything', {
          model: args
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    authorization({commit}, {...args}) {
      console.log(args);

      return new Promise((resolve, reject) => {
        axios.get('/author', {
          model: args
        })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },

  getters: {
    loggedIn(state) {
      return state.token !== null
    }
  },
}
