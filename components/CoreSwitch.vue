<template>
  <v-switch
    v-model="val"
    :label="label"
    inset
    @change="$emit('input', val)"
  ></v-switch>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      val: this.value,
    }
  },
}
</script>
