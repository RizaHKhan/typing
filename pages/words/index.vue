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
      v-model="userEntry"
      :disabled="showScore"
      label="Input"
      @keyup.space="checkInput()"
    />
    <v-row v-if="showScore">
      <v-col>
        <h1>Correct:</h1>
        <p>{{ correct }}</p>
        <ul>
          <li v-for="word in correctArray" :key="word">{{ word.word }}</li>
        </ul>
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
    timer: 10,
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
        this.correctArray.push({ word: this.words[this.position] })
      } else {
        this.wrong++
        this.wrongArray.push({
          word: this.words[this.position],
          entered: this.userEntry.substring(0, this.userEntry.length - 1)
        })
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
