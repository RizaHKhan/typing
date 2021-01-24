<template>
  <v-toolbar dense height="75px">
    <v-toolbar-title class="text-h5 font-weight-thin"
      >TypingMastery</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-btn small class="ml-2" text>Blog</v-btn>
    <v-btn
      v-if="!$auth.loggedIn"
      small
      class="ml-2"
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Login
    </v-btn>
    <v-btn v-else small class="orange ml-2" @click="logout">Logout</v-btn>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-tabs v-model="tab" background-color="grey darken-1" centered>
          <v-tabs-slider color="orange"></v-tabs-slider>

          <v-tab href="#tab-1" class="white--text">Login</v-tab>
          <v-tab href="#tab-2" class="white--text"> Register </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <v-card flat>
              <Login @loggedIn="closeDialog" />
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-2">
            <v-card flat>
              <Register @registered="closeDialog" />
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>

<script>
import Login from './Login.vue'
import Register from './Register.vue'

export default {
  components: {
    Login,
    Register,
  },
  data() {
    return {
      dialog: false,
      tab: null,
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
    closeDialog() {
      this.dialog = false
    },
  },
}
</script>
