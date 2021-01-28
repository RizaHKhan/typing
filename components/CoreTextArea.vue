<template>
  <v-textarea
    v-model="val"
    :label="label"
    @input="$emit('input', val)"
  ></v-textarea>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
      required: false,
    },
    label: {
      type: String,
      default: 'Description',
    },
  },
  data() {
    return {
      val: this.value,
    }
  },
}
</script>
