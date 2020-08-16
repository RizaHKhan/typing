<template>
  <div>
    <p>{{ target }}</p>
  </div>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      required: true
    }
  }
}
</script>
