<template>
  <v-layout column justify-center align-center>
    <h1>Header</h1>
    <p v-for="word in words" :key="word">
      {{ word }}
    </p>
    <v-text-field label="input" />
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    word: '',
    letter: ''
  }),
  computed: {
    ...mapGetters({
      words: 'words/GET_WORDS'
    })
  }
}
</script>
