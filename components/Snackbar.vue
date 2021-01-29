<template>
  <v-snackbar
    v-model="show"
    :color="color"
    class="d-flex justify-content-between"
  >
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn color="red" v-bind="attrs" @click="show = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      color: '',
    }
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'ui/ADD_SNACKBAR_MESSAGE') {
        this.message = state.ui.message
        this.color = state.ui.color
        this.show = true
      }
    })
  },
}
</script>

<style></style>
