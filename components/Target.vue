<template>
  <div>
    <h1>{{ target }}</h1>
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
