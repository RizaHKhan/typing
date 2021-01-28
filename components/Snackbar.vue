<template>
  <div>
    <v-btn @click="addM">Show</v-btn>
    <v-snackbar v-model="snackbar">
      {{ currentSnack }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      currentSnack: '',
      snackbar: false,
    }
  },
  computed: {
    ...mapGetters({
      messages: 'ui/GET_SNACKBAR_MESSAGES',
    }),
  },
  watch: {
    snackbar(newVal, oldVal) {
      if (!newVal) {
        this.checkForMoreMessages()
      }
    },
  },
  methods: {
    ...mapMutations({
      addMessage: 'ui/ADD_SNACKBAR_MESSAGE',
      removeMessage: 'ui/REMOVE_FIRST_MESSAGE',
    }),
    addM() {
      this.addMessage('Some random message')
    },
    checkForMoreMessages() {
      this.currentSnack = this.messages[0]
    },
  },
}
</script>

<style></style>
