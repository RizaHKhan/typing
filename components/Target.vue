<template>
  <v-btn :class="color">
    {{ target }}
  </v-btn>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.v-btn {
  text-transform: none;
}
</style>
