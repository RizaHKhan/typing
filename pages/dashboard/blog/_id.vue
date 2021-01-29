<template>
  <v-container>
    <CoreInput v-model="blog.title" />
    <CoreSwitch v-model="blog.published" />
    <CoreTextArea v-model="blog.description" />
    <v-row>
      <v-col class="d-flex justify-end">
        <v-btn class="success" @click="updateBlog">Update</v-btn>
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
  async asyncData({ params, $axios }) {
    try {
      const response = await $axios.get(`/blogs/${params.id}`)
      const blog = response.data
      return { blog }
    } catch (e) {
      console.log(e)
    }
  },
  methods: {
    async updateBlog() {
      try {
        await this.$axios.put(`/blogs/${this.blog._id}`, this.blog)
        this.$router.push('/dashboard/')
      } catch (e) {}
    },
  },
}
</script>
