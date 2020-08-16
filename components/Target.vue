<template>
  <v-btn class="mx-auto" :class="color" v-if="display">
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
    },
    display: {
      type: Boolean,
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
