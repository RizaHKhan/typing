<template>
  <v-layout wrap>
    <v-col v-if="$auth.user.admin" cols="12">
      <v-btn to="/dashboard/blog" class="success">
        <v-icon left>mdi-plus</v-icon>
        Add a blog</v-btn
      >
    </v-col>
    <v-col cols="12">
      <p class="text-h3 font-weight-light">Dashboard</p>
    </v-col>
    <v-col>
      <v-layout v-if="metaData" wrap>
        <v-card outlined class="ma-2 mb-auto">
          <v-card-title>Your Average</v-card-title>
          <v-card-text class="text-h3 orange--text">{{
            Math.ceil(metaData.averageScore)
          }}</v-card-text>
          <v-card-title>Global</v-card-title>
          <v-card-text class="text-h4 white--text">
            {{ Math.ceil(globalAvg.average) }}
          </v-card-text>
        </v-card>
        <v-card outlined class="ma-2 mb-auto">
          <v-card-title>Tests Taken</v-card-title>
          <v-card-text class="text-h3 white--text">{{
            metaData.numOfTests
          }}</v-card-text>
        </v-card>
        <v-card v-if="wrongWordsModified.length" outlined class="ma-2 mb-auto">
          <v-card-title>Most Misspelt Words</v-card-title>
          <v-card-text
            v-for="word in wrongWordsModified"
            :key="word"
            class="py-1"
            >{{ word }}</v-card-text
          >
        </v-card>
        <v-card
          v-if="$auth.user.admin"
          outlined
          class="mb-auto ma-2"
          max-width="1000px"
        >
          <v-card-title>Your Blogs</v-card-title>
          <v-card-text
            v-for="(blog, i) in allBlogTitles"
            :key="blog._id"
            class="d-flex justify-space-between text-body font-weight-light align-center"
            >{{ blog.title }}
            <v-card-actions>
              <v-btn :to="`/dashboard/blog/${blog._id}`">
                <v-icon>mdi-tools</v-icon>
              </v-btn>
              <v-btn @click="deleteBlogById(blog._id, i)">
                <v-icon class="red--text">mdi-delete</v-icon>
              </v-btn>
              <CoreSwitch
                v-model="blog.published"
                class="ml-3"
                @input="changePublishState($event, blog._id)"
              />
            </v-card-actions>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-col>
  </v-layout>
</template>

<script>
import CoreSwitch from '@/components/CoreSwitch.vue'

export default {
  components: { CoreSwitch },
  middleware: 'auth',
  async asyncData({ $axios }) {
    try {
      const testsResponse = await $axios.get('/tests')
      const blogsResponse = await $axios.get('/blogs')

      const { metaData, globalAvg } = testsResponse.data
      const { allBlogTitles } = blogsResponse.data
      return { metaData, globalAvg, allBlogTitles }
    } catch (e) {
      console.log(e)
    }
  },
  computed: {
    wrongWordsModified() {
      return Object.entries(
        [].concat
          .apply(
            [],
            this.metaData?.wrongWords.map((i) => i.map((i) => i.word))
          )
          .reduce((acc, curr) => {
            if (typeof acc[curr] === 'undefined') {
              acc[curr] = 1
            } else {
              acc[curr] += 1
            }
            return acc
          }, {})
      )
        .filter((e) => e[1] > 2)
        .sort((a, b) => b[1] - a[1])
        .map((e) => e[0])
    },
  },
  methods: {
    async deleteBlogById(id, index) {
      try {
        await this.$axios.delete(`/blogs/${id}`)
        this.allBlogTitles.splice(index, 1)
      } catch (e) {
        console.log(e)
      }
    },
    async changePublishState(event, id) {
      const blog = this.allBlogTitles.find((blog) => blog._id === id)
      blog.published = event
      await this.$axios.put(`/blogs/${id}`, blog)
    },
  },
}
</script>
