<template>
  <v-layout column justify-center align-center>
    <h1 class="display-2 grey--text">Words</h1>
    <v-container>
      <v-row>
        <v-col v-for="(word, index) in shuffledWords" :key="index">
          <Target :target="word" :color="index === position ? 'red' : ''" />
        </v-col>
      </v-row>
    </v-container>
    <v-text-field
      v-model="userEntry"
      :disabled="showScore"
      label="Input"
      @keyup.space="checkInput()"
    />
    <v-row v-if="showScore">
      <v-col>
        <h1>Score</h1>
        <p>{{ score }}</p>
      </v-col>
      <v-col>
        <h1>Correct:</h1>
        <p>{{ correct }}</p>
      </v-col>
      <v-col>
        <h1>Wrong:</h1>
        <p>{{ wrong }}</p>
        <ul>
          <li v-for="word in wrongArray" :key="word">
            {{ word.word }} / {{ word.entered }}
          </li>
        </ul>
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
    wrongArray: [],
    correct: 0,
    correctArray: [],
    timer: 60,
    gameStarted: false,
    showScore: false,
    totalEntries: [],
    wrongEntries: [],
    score: 0
  }),
  computed: {
    ...mapGetters({
      words: 'words/GET_WORDS'
    }),
    shuffledWords() {
      const newArray = [...this.words]
      return newArray.sort(() => Math.random() - 0.5)
    }
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
        this.shuffledWords[this.position] ===
        this.userEntry.substring(0, this.userEntry.length - 1)
      ) {
        this.correct++
        this.correctArray.push({ word: this.shuffledWords[this.position] })
      } else {
        this.wrong++
        this.wrongArray.push({
          word: this.shuffledWords[this.position],
          entered: this.userEntry.substring(0, this.userEntry.length - 1)
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
    }
  }
}
</script>
