import axios from 'axios'

export default {

  getData ({ commit }) {
    commit('SET_LOADING', true)

    axios.get(process.env.VUE_APP_API + '/data', { crossDomain: false })
      .then(response => {
        commit('SET_DATA', response.data)
      })
      .catch(error => {
        commit('SET_ERROR', error.message)
      })
      .finally(() => commit('SET_LOADING', false))
  }
}