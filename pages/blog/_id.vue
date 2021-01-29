<template>
  <v-container>
    <v-card class="pa-2">
      <v-card-title>{{ blog.title }}</v-card-title>
      <v-card-text>
        <vue-markdown class="markdown">{{ blog.description }}</vue-markdown>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  components: { VueMarkdown },
  async asyncData({ params, $axios }) {
    try {
      const response = await $axios.get(`/blogs/${params.id}`)
      const blog = response.data
      return { blog }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>
