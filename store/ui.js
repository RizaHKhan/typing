export const state = () => ({
  message: '',
  color: '',
})

export const mutations = {
  ADD_SNACKBAR_MESSAGE(state, payload) {
    state.message = payload.message
    state.color = payload.color
  },
}
