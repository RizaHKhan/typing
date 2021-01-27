<template>
  <v-toolbar dense height="100px">
    <v-toolbar-title class="font-weight-thin title" @click="$router.push('/')"
      >TypingMastery</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <v-row>
      <v-col v-if="$auth.loggedIn" cols="12 py-0 pl-2 d-flex justify-end">
        <p class="text--disabled text-caption">{{ $auth.user.email }}</p>
      </v-col>
      <v-col cols="12 py-0 pl-2 d-flex justify-end">
        <v-btn
          v-if="!$auth.loggedIn"
          small
          class="mx-1"
          color="primary"
          dark
          @click.stop="dialog = true"
        >
          Login
        </v-btn>
        <v-btn v-if="$auth.loggedIn" small class="success mx-1" to="/words"
          >Tests</v-btn
        >
        <v-btn v-if="$auth.loggedIn" small to="/dashboard" class="primary"
          >Dashboard</v-btn
        >
        <v-btn
          v-if="$auth.loggedIn"
          small
          class="orange mx-1"
          @click="$auth.logout()"
        >
          <v-icon dark>mdi-power</v-icon>
        </v-btn>
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
      </v-col>
    </v-row>
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
    closeDialog() {
      this.dialog = false
    },
  },
}
</script>
<style lang="scss" scoped>
.title {
  &:hover {
    cursor: pointer;
  }
}
</style>
