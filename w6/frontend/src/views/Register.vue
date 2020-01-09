<template lang="pug">
  v-container
    v-layout(row justify-center)
      v-flex( xs12 sm6 md5 lg4 xl3)
        v-slide-y-transition
          v-card(class="login-main" color="lighten-4" light)
            div(class="login-header")
              img(src="../assets/logo.png")
              //- div(id="login_progress-bar")
              //-   v-progress-linear(v-show="inProgress" :indeterminate="true" color="info")
            v-form
              div(class="error-container")
                v-slide-y-transition
                  v-subheader(v-if="loginError" class="error--text justify-center login-error")
                    | {{ loginErrorMsg }}
              v-text-field(v-model="user.fullname"
                label="fullname"
                data-vv-name="fullname"
                data-vv-as="fullname"
                :error-messages="$validator.errors.first('fullname')"
                )
              v-text-field(v-model="user.username"
                label="Username"
                v-validate="'required'"
                data-vv-name="username"
                data-vv-as="username"
                :error-messages="$validator.errors.first('username')"
                )
              v-text-field(v-model="user.password"
                type="password"
                label="password"
                v-validate="'required'"
                data-vv-name="password"
                :error-messages="$validator.errors.first('password')"
                data-vv-as="password"
                )
              v-btn(@click="register" color="primary" block) Register
</template>

<script>
/* eslint-disable no-console */
/* eslint prefer-destructuring: ["error", {VariableDeclarator: {object: true}}] */
import api from '@/api/restApi';

export default {
  name: 'Register',
  data() {
    return {
      inProgress: false,
      user: {
        fullname: '',
        username: '',
        password: '',
      },
      loginErrorMsg: 'Invalid username or password',
      loginError: false,
    };
  },
  methods: {
    register() {
      this.inProgress = false;
      this.loginError = false;
      this.$validator.validateAll()
        .then((result) => {
          if (!result) {
            return;
          }
          api.sendPost('/createUser', this.user)
            .then((res) => {
              this.inProgress = false;
              if (res.status === 200) {
                this.$router.push('/login');
              } else {
                this.loginErrorMsg(res.data.message);
              }
            }, (error) => {
              console.log(error);
              this.inProgress = false;
              this.loginError = true;
              this.loginErrorMsg = error;
            });
        });
    },
  },
  mounted() {
  },
};
</script>
