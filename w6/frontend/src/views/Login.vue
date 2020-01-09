<template lang="pug">
  v-container
    v-layout(row justify-center)
      v-flex( xs12 sm6 md5 lg4 xl3)
        v-slide-y-transition
          v-card.login-main(color="lighten-4" light)
            div(class="login-header")
              img(src="../assets/logo.png")
              div(id="login_progress-bar")
                v-progress-linear(v-show="loginInProgress" :indeterminate="true" color="info")
            v-form
              div(class="error-container")
                v-slide-y-transition
                  v-subheader(v-if="loginError" class="error--text justify-center")
                    | {{ loginErrorMsg }}
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
              v-btn(style="margin-top: 5px" color="primary" block @click="login") Login
              v-btn(style="margin-top: 5px" color="primary" block @click="register") Register
</template>

<style lang="stylus">
  #container
    min-height: 800px
    height: 100%

  .container
    padding: 0px !important

  .login-main
    top: 5em
    padding: 3em
    background-color: #fff
    .login-header
      margin: -3em
      min-height: 37px
      margin-bottom: auto
      text-align: center
      & > h4
        color: #fff
        position: relative
    #progress-bar
      position: relative
      min-height: 7px
      margin: 1rem 0
    .error-container
      .login-error
        font-weight: lighter
</style>

<script>
/* eslint-disable no-console */
import api from '@/api/restApi';


export default {
  name: 'TopMenu',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      loginErrorMsg: 'Invalid username or password',
      loginError: false,
      loginInProgress: false,
    };
  },
  methods: {
    login() {
      this.loginError = false;
      this.$validator.validateAll()
        .then((result) => {
          if (!result) {
            return;
          }
          this.loginInProgress = true;
          if (!this.user.username || !this.user.password) {
            this.loginErrorMsg = 'Please Provide username and password';
            return;
          }
          api.sendPost('/login', this.user)
            .then((res) => {
              if (res.status === 200) {
                this.$router.push('/');
                this.loginInProgress = true;
              } else {
                this.loginErrorMsg(res.data.message);
              }
            }, (error) => {
              this.loginError = true;
              this.loginInProgress = false;
              this.loginErrorMsg = error.response.data.message;
            });
        });
    },
    register() {
      this.$router.push('/register');
    },
  },
  mounted() {
  },
};
</script>
