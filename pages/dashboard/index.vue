<template>
  <v-layout wrap>
    <v-col cols="12">
      <p class="text-h3 font-weight-light">Dashboard</p>
    </v-col>
    <v-col>
      <v-layout wrap>
        <v-card outlined class="ma-2">
          <v-card-title>Average</v-card-title>
          <v-card-text class="text-h3 white--text">{{
            Math.ceil(metaData.averageScore)
          }}</v-card-text>
        </v-card>
        <v-card outlined class="ma-2">
          <v-card-title>Tests Taken</v-card-title>
          <v-card-text class="text-h3 white--text">{{
            metaData.numOfTests
          }}</v-card-text>
        </v-card>
        <v-card>
          <v-card-title>Most Misspelt Words</v-card-title>
          <v-card-text
            v-for="word in wrongWordsModified"
            :key="word"
            class="py-1"
            >{{ word }}</v-card-text
          >
        </v-card>
      </v-layout>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  middleware: 'auth',
  async asyncData({ $axios }) {
    try {
      const response = await $axios.get('/tests')
      const { metaData } = response.data
      return { metaData }
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
            this.metaData.wrongWords.map((i) => i.map((i) => i.word))
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
}
</script>

<style></style>
