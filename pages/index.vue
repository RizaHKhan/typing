<template>
  <v-layout wrap class="pt-10 justify-center">
    <v-col cols="12" md="6">
      <About />
    </v-col>
    <v-col v-if="$auth.loggedIn">
      <h1 class="font-weight-light">Choose What you want to improve today:</h1>
      <v-btn to="/words" class="success my-1">Words</v-btn>
    </v-col>
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
