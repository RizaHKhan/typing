<template>
  <div>
    <v-col v-for="doc in docs" :key="doc.slug">
      <h1>{{ doc.title }}</h1>
      <p>{{ doc.description }}</p>
      <v-btn :to="'/blog/' + doc.title">Read more...</v-btn>
    </v-col>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const docs = await $content('blog')
      .sortBy('title')
      .fetch()

    console.log('docs', docs)
    return { docs }
  }
}
</script>

<style scoped></style>
