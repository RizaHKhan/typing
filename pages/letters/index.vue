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
            v-model="userInput"
            label="Letters"
            @input="check()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="2" lg="1">
          <v-btn class="red" @click.prevent="startTest">Start</v-btn>
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
      score: ''
    }
  },
  computed: {
    ...mapGetters({
      letters: 'words/GET_LETTERS'
    })
  },
  methods: {
    startTest() {
      this.letter = this.letters[
        Math.floor(Math.random() * this.letters.length)
      ]
      setTimeout(() => {
        console.log('test complete')
      }, 60000)
    },
    check() {
      // Reset the input field
      this.userInput = ''

      if (this.userInput === this.letter) {
        this.letter = this.letters[
          Math.floor(Math.random() * this.letters.length)
        ]
        this.score++
      } else {
        this.letter = this.letters[
          Math.floor(Math.random() * this.letters.length)
        ]
      }
    }
  }
}
</script>
