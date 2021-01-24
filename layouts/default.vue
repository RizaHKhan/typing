<template>
  <v-app dark>
    <v-main>
      <Header />
      <v-container fluid class="pa-0">
        <nuxt />
      </v-container>
    </v-main>
    <Snackbar />
    <v-footer :fixed="fixed" app>
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
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
