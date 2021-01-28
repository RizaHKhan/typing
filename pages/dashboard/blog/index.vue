<template>
  <v-container>
    <CoreInput v-model="blog.title" />
    <CoreSwitch v-model="blog.published" />
    <CoreTextArea v-model="blog.description" />
    <v-row>
      <v-col class="d-flex justify-end">
        <v-btn class="success" @click="submitBlog">Submit</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CoreInput from '@/components/CoreInput.vue'
import CoreTextArea from '@/components/CoreTextArea.vue'
import CoreSwitch from '@/components/CoreSwitch.vue'

export default {
  components: { CoreInput, CoreTextArea, CoreSwitch },
  data() {
    return {
      blog: {
        title: '',
        description: '',
        published: false,
      },
    }
  },
  methods: {
    async submitBlog() {
      try {
        await this.$axios.post('/blogs', this.blog)
        this.$router.push('/dashboard/')
      } catch (e) {}
    },
  },
}
</script>
