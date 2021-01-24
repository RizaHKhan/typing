export const state = () => ({
  user: {},
  token: null,
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  CLEAR_TOKEN(state) {
    state.token = null
  },
}

export const actions = {
  async REGISTER({ commit }, user) {
    try {
      const response = await this.$axios.$post('/users/register', user)
      commit('SET_TOKEN', response.token)
    } catch (e) {
      console.log('unable to login')
      throw e
    }
  },
}

export const getters = {
  IS_AUTHENTICATED: (state) => state.token,
}
