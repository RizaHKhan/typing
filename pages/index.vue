<template>
  <v-layout column>
    <About />
    <h1 class="mx-auto">Choose What you want to improve today:</h1>
    <v-btn to="/words" class="primary white--text my-1 mx-auto">Words</v-btn>
  </v-layout>
</template>

<script>
import About from '@/components/About'

export default {
  components: {
    About,
  },
}
</script>
