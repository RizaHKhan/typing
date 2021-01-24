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
        <v-col cols="12">
          <v-text-field
            v-model="repeatPassword"
            :rules="[repeatPasswordRules.equals(password)]"
            type="password"
            label="Password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="d-flex justify-end">
        <v-btn class="primary" @click.prevent="register">Register</v-btn>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    valid: false,
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required',
      (v) =>
        (v && v.length >= 5) || 'Password must be at leat than 5 characters',
      (v) =>
        (v && v.length <= 50) || 'Password must be less then 50 characters',
    ],
    repeatPassword: '',
    repeatPasswordRules: {
      equals(password) {
        return (v) => v === password || 'Both passwords must match'
      },
    },
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  methods: {
    ...mapActions({
      registerAction: 'user/REGISTER',
    }),
    async register() {
      if (!this.$refs.form.validate()) return
      try {
        const user = { email: this.email, password: this.password }
        await this.registerAction(user)
        this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
      } catch (e) {
        console.log('there was an error')
      }
    },
  },
}
</script>
