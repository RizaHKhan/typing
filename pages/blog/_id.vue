<template>
  <v-container>
    <v-card>
      <v-card-title>{{ blog.title }}</v-card-title>
      <v-card-text>{{ blog.description }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
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
