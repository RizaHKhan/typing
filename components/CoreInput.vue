<template>
  <v-text-field
    v-model="val"
    :label="label"
    @input="$emit('input', val)"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: 'Title',
    },
  },
  data() {
    return {
      val: this.value,
    }
  },
}
</script>
