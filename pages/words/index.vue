<template>
  <v-layout column justify-center align-center class="my-5">
    <p class="text-h4 font-weight-light grey--text">{{ counter }}</p>
    <v-container v-if="!showScore">
      <v-row>
        <v-col cols="6" offset="3">
          <Target
            v-for="(word, index) in shuffledWords"
            :key="index"
            :target="word"
            :color="index === position ? 'grey' : ''"
          />
        </v-col>
      </v-row>
      <v-text-field
        v-model="userEntry"
        :disabled="showScore"
        label="Input"
        @keyup.space="checkInput()"
      />
    </v-container>
    <v-row v-if="showScore">
      <v-col cols="12">
        <v-btn class="primary" @click="resetGame">Reset</v-btn>
      </v-col>
      <v-col>
        <h1>Score</h1>
        <p>{{ score }}</p>
      </v-col>
      <v-col cols="12">
        <h1>Words you got wrong</h1>
        <p>{{ wrong }}</p>
        <v-row v-for="word in wrongArray" :key="word">
          <v-col cols="6">Correct: {{ word.word }}</v-col>
          <v-col cols="6">What you typed: {{ word.entered }}</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Target from '@/components/Target'

export default {
  components: {
    Target,
  },
  middleware: 'auth',
  data: () => ({
    userEntry: '',
    position: 0,
    wrong: 0,
    wrongArray: [],
    correct: 0,
    correctArray: [],
    timer: 30,
    gameStarted: false,
    showScore: false,
    totalEntries: [],
    wrongEntries: [],
    counter: 30,
    score: 0,
  }),
  computed: {
    ...mapGetters({
      words: 'words/GET_WORDS',
    }),
    shuffledWords() {
      const newArray = [...this.words]
      return newArray.sort(() => Math.random() - 0.5)
    },
  },
  methods: {
    checkInput() {
      if (!this.gameStarted) {
        this.gameStarted = true

        const startCountdown = setInterval(() => {
          this.counter--
        }, 1000)

        setTimeout(async () => {
          this.stopGame()
          clearInterval(startCountdown)
          this.counter = 30
          await this.$axios.post('/tests', {
            wrongWords: this.wrongArray,
            score: this.score,
            email: this.$auth.user.email,
          })
        }, this.timer * 1000)
      }

      if (
        this.shuffledWords[this.position] ===
        this.userEntry.substring(0, this.userEntry.length - 1).trim()
      ) {
        this.correct++
        this.correctArray.push({ word: this.shuffledWords[this.position] })
      } else {
        this.wrong++
        this.wrongArray.push({
          word: this.shuffledWords[this.position],
          entered: this.userEntry
            .substring(0, this.userEntry.length - 1)
            .trim(),
        })
        this.wrongEntries = [...this.userEntry, this.wrongEntries]
      }

      // Should this # contain the spacebar?
      this.totalEntries = [...this.userEntry.split(''), ...this.totalEntries]
      this.position++
      this.userEntry = ''
    },
    calculateScore() {
      this.score =
        (this.totalEntries.length / 5 - this.wrongArray.length) /
        (this.timer / 60)
    },
    stopGame() {
      this.showScore = true
      this.calculateScore()
    },
    resetGame() {
      this.userEntry = ''
      this.position = 0
      this.wrong = 0
      this.wrongArray = []
      this.correct = 0
      this.correctArray = []
      this.timer = 60
      this.gameStarted = false
      this.showScore = false
      this.totalEntries = []
      this.wrongEntries = []
      this.score = 0
    },
  },
}
</script>
