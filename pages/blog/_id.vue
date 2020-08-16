<template>
  <v-col>
    <v-container>
      <v-row>
        <v-col>
          <h1>{{ blog.title }}</h1>
          <p>{{ blog.author }}</p>
        </v-col>
      </v-row>
      <p>{{ blog.body }}</p>
    </v-container>
  </v-col>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      blog: 'blog/GET_BLOG'
    })
  }
}
</script>
