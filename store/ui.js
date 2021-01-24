export const state = () => ({
  messages: ['message one', 'message two', 'message three'],
})

export const mutations = {
  ADD_SNACKBAR_MESSAGE(state, message) {
    state.messages.push(message)
  },
  REMOVE_FIRST_MESSAGE(state) {
    state.messages.shift()
  },
}

export const getters = {
  GET_SNACKBAR_MESSAGES: (state) => [...state.messages],
}
