<template>
  <v-container>
    <h1 class="display-3 font-weight-light">Letters</h1>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <h1 class="display-4">{{ letter }}</h1>
      </v-col>
      <v-row class="d-flex justify-center">
        <v-col cols="12" md="4" lg="2">
          <v-text-field
            ref="userinput"
            v-model="userInput"
            label="Letters"
            v-on:keypress="check"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2" lg="1">
          <v-btn class="red" @click.prevent="startTest">Start</v-btn>
          <v-btn class="primary" @click.prevent="resetInput">Reset</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      letter: '',
      userInput: '',
      score: 0
    }
  },
  computed: {
    ...mapGetters({
      letters: 'words/GET_LETTERS'
    })
  },
  methods: {
    startTest() {
      this.randomLetter()
      this.$refs.userinput.focus()

      setTimeout(() => {
        console.log('your score is', this.score)
        this.score = 0
      }, 10000)
    },
    check() {
      console.log('userinput', this.userInput)
      console.log('letter', this.letter)
      if (this.userInput === this.letter) {
        this.score++
      } else {
        this.score--
      }

      this.randomLetter()
      this.userInput = ''
    },
    randomLetter() {
      this.letter = this.letters[
        Math.floor(Math.random() * this.letters.length)
      ]
    },
    resetInput() {
      this.userInput = ''
    }
  }
}
</script>
