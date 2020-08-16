<template>
  <v-container>
    <nuxt-content :document="doc" />
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(`/blog/${params.slug}` || 'index').fetch()
    return { doc }
  }
}
</script>
