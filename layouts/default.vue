<template>
  <v-app dark>
    <v-main>
      <Header />
      <v-container class="pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <Snackbar />
    <v-footer app class="d-flex justify-center" height="75px">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'
import Snackbar from '@/components/Snackbar.vue'

export default {
  components: {
    Header,
    Snackbar,
  },
}
</script>
