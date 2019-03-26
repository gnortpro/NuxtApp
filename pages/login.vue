<template>
  <div>
    <Notification v-if="error" :message="error" />
    <v-container>
      <v-layout align-center justify-center>
        <v-flex class="text-xs-center" xs12 md4>
          <!-- <div v-if="accessToken">Already login</div>
                <div v-if="loginErrorn">-->
          <div class="display-1 mb-3">Welcome back!</div>
          <v-card style="padding:20px">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="login"
            >
              <v-card-text subheading>Log in to X3English</v-card-text>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                prepend-icon="email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                :append-icon="show ? 'visibility' : 'visibility_off'"
                label="Password"
                prepend-icon="lock"
                :type="show ? 'text' : 'password'"
                :rules="[passwordRules.required, passwordRules.min]"
                hint="At least 6 characters"
                counter
                required
                @click:append="show = !show"
              ></v-text-field>
              <v-checkbox
                light
                label="Stay logged in?"
                hide-details
              ></v-checkbox>
              <v-btn
                color="primary"
                type="submit"
                :disabled="!valid"
                @click="validate"
                >Sign In</v-btn
              >
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  components: {
    Notification
  },
  middleware: 'guest',
  data() {
    return {
      email: '',
      password: '',
      error: null,
      valid: true,
      show: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: {
        required: v => !!v || 'Password is required',
        min: v => v.length >= 6 || 'Min 6 characters'
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password
          }
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>
