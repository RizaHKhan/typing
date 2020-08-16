export const state = () => ({
  blogs: [
    {
      index: 1,
      title: 'Blog 1',
      author: 'khanr',
      image:
        'https://playingspree.com/wp-content/uploads/2018/04/best-gaming-keyboards.jpg',
      createdDate: '2020/10/10'
    },
    {
      index: 2,
      title: 'Blog 2',
      author: 'khanr',
      image:
        'https://playingspree.com/wp-content/uploads/2018/04/best-gaming-keyboards.jpg',
      createdDate: '2021/10/10'
    },
    {
      index: 3,
      title: 'Blog 3',
      author: 'khanr',
      image:
        'https://playingspree.com/wp-content/uploads/2018/04/best-gaming-keyboards.jpg',
      createdDate: '2022/10/10'
    },
    {
      index: 4,
      title: 'Blog 4',
      author: 'khanr',
      image:
        'https://playingspree.com/wp-content/uploads/2018/04/best-gaming-keyboards.jpg',
      createdDate: '2024/10/10'
    },
    {
      index: 5,
      title: 'Blog 5',
      author: 'khanr',
      image:
        'https://playingspree.com/wp-content/uploads/2018/04/best-gaming-keyboards.jpg',
      createdDate: '2010/10/10'
    },
    {
      index: 6,
      title: 'Blog 6',
      author: 'khanr',
      image:
        'https://playingspree.com/wp-content/uploads/2018/04/best-gaming-keyboards.jpg',
      createdDate: '2010/10/10'
    }
  ],
  blog: {
    title: 'Blog 1',
    body:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta temporibus tempora esse at! Quidem nihil voluptatibus accusamus reiciendis repellat! Perferendis illo enim quod similique voluptates consectetur laudantium! Ab id maxime dolorem, dicta distinctio asperiores harum ex, est ipsa pariatur sequi culpa, inventore molestiae quae totam aperiam ad.  Nostrum, voluptatem itaque?',
    image:
      'https://playingspree.com/wp-content/uploads/2018/04/best-gaming-keyboards.jpg',
    createdDate: '2020/10/14',
    updatedDate: '2021/2/12'
  }
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
