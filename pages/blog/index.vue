<template>
  <v-container>
    <v-card
      v-for="blog in blogs"
      :key="blog.index"
      class="my-4 pa-4"
      :to="'/blog/' + blog.index"
    >
      <v-card-title class="pa-0">
        <h1 class="font-weight-light">{{ blog.title }}</h1>
      </v-card-title>
      <v-card-content>
        <p>{{ blog.author }}</p>
        <p>Posted: {{ blog.createdDate }}</p>
      </v-card-content>
      <v-img :src="blog.image" height="300" width="300" />
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      blogs: 'blog/GET_BLOGS'
    })
  }
}
</script>
