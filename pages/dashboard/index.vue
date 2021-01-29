<template>
  <v-layout wrap>
    <v-col v-if="$auth.user.admin" cols="12"> </v-col>
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
          <v-card-title
            >Your Blogs

            <v-btn to="/dashboard/blog" class="green lighten-1 ml-auto">
              <v-icon left>mdi-plus</v-icon>
              Add a blog</v-btn
            >
          </v-card-title>

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-center">Edit</th>
                  <th class="text-center">Delete</th>
                  <th class="text-center">Published</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(blog, i) in allBlogTitles" :key="i">
                  <td>{{ blog.title }}</td>
                  <td>
                    <v-btn :to="`/dashboard/blog/${blog._id}`" depressed>
                      <v-icon>mdi-tools</v-icon>
                    </v-btn>
                  </td>
                  <td>
                    <v-btn depressed @click="deleteBlogById(blog._id, i)">
                      <v-icon class="red--text">mdi-delete</v-icon>
                    </v-btn>
                  </td>
                  <td>
                    <CoreSwitch
                      v-model="blog.published"
                      class="ml-3"
                      @input="changePublishState($event, blog._id)"
                    />
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
  async asyncData({ $axios, $notifier, redirect }) {
    try {
      const testsResponse = await $axios.get('/tests')
      const blogsResponse = await $axios.get('/blogs')

      const { metaData, globalAvg } = testsResponse.data
      const { allBlogTitles } = blogsResponse.data
      return { metaData, globalAvg, allBlogTitles }
    } catch (e) {
      $notifier.showMessage({
        message: 'Unable to load content',
        color: 'black',
      })
      redirect('/')
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
