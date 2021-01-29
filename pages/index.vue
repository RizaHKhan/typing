<template>
  <v-layout wrap class="pt-10">
    <v-col cols="12" md="6">
      <About />
    </v-col>
    <v-col v-if="$auth.loggedIn">
      <h1 class="font-weight-light">Choose What you want to improve today:</h1>
      <v-btn to="/words" class="success my-1">Words</v-btn>
    </v-col>
    <v-col cols="12" md="6">
      <v-sheet class="pa-4" rounded>
        <h1 class="font-weight-light">Read some of our blogs!</h1>
        <v-layout column justify-start>
          <v-btn
            v-for="(blog, i) in blogs"
            :key="i"
            :to="`/blog/${blog._id}`"
            text
            class="mr-auto grey--text"
            >{{ blog.title }}</v-btn
          >
        </v-layout>
      </v-sheet>
      <v-btn @click="addMessage">Add Message</v-btn>
    </v-col>
  </v-layout>
</template>

<script>
import About from '@/components/About'

export default {
  components: {
    About,
  },
  async asyncData({ $axios }) {
    try {
      const response = await $axios.get('/blogs')
      const { allBlogTitles } = response.data
      return { blogs: allBlogTitles.filter((blog) => blog.published) }
    } catch (e) {
      return { error: e }
    }
  },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    addMessage() {
      this.$notifier.showMessage({
        message: `Hello #${this.counter++}`,
        color: 'black',
      })
    },
  },
}
</script>
