<template>
  <v-layout column justify-center align-center>
    <h1 class="display-2 grey--text">Words</h1>
    <v-row>
      <v-col
        v-for="(word, index) in words"
        :key="index"
        :class="[index === position ? 'red' : '']"
      >
        <Target :target="word" />
      </v-col>
    </v-row>
    <v-text-field
      :disabled="showScore"
      v-model="userEntry"
      label="Input"
      @keyup.space="checkInput()"
    />
    <v-row v-if="showScore">
      <v-col>
        <h1>Correct:</h1>
        <p>{{ correct }}</p>
      </v-col>
      <v-col>
        <h1>Wrong:</h1>
        <p>{{ wrong }}</p>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Target from '@/components/Target'

export default {
  components: {
    Target
  },
  data: () => ({
    userEntry: '',
    position: 0,
    wrong: 0,
    correct: 0,
    timer: 5,
    gameStarted: false,
    showScore: false
  }),
  computed: {
    ...mapGetters({
      words: 'words/GET_WORDS'
    })
  },
  methods: {
    checkInput() {
      if (!this.gameStarted) {
        this.gameStarted = true

        setTimeout(() => {
          this.stopGame()
        }, this.timer * 1000)
      }

      if (
        this.words[this.position] ===
        this.userEntry.substring(0, this.userEntry.length - 1)
      ) {
        this.correct++
      } else {
        this.wrong++
      }

      this.position++
      this.userEntry = ''
    },
    stopGame() {
      this.showScore = true
    }
  }
}
</script>
