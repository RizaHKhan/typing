<template>
  <v-btn class="ma-1" :class="color" text>
    {{ target }}
  </v-btn>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.v-btn {
  text-transform: none;
}
</style>
