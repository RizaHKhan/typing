export const state = () => ({
  blogs: [],
  blog: {}
})

export const getters = {
  GET_BLOGS: (state) => state.blogs,
  GET_BLOG: (state) => state.blog
}

export const mutations = {
  SET_BLOGS: (state, payload) => {
    state.blogs = payload
  },
  SET_BLOG: (state, payload) => {
    state.blog = payload
  }
}

export const actions = {
  async GET_BLOGS({ commit }) {
    try {
      const response = await fetch('some site')
      commit('GET_BLOGS', response.data)
    } catch (e) {
      console.log(e)
    }
  },
  async GET_BLOG({ commit }, id) {
    try {
      const response = await fetch('some site', id)
      commit('GET_BLOG', response.data)
    } catch (e) {
      console.log(e)
    }
  }
}
