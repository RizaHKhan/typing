<template>
  <v-form ref="form" v-model="valid" class="pa-2">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            type="password"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-end">
        <v-btn class="primary" @click="login">Login</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) =>
        (v && v.length >= 5) || 'Password must be at leat than 5 characters',
      (v) =>
        (v && v.length <= 50) || 'Password must be less then 50 characters',
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        try {
          this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            },
          })
          this.$emit('loggedIn')
        } catch (e) {
          console.log(e)
        }
      } else {
        console.log('you have errors')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  color: red;
}
</style>
