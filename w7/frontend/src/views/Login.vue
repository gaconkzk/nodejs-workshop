<template lang="pug">
.wrapper(:class="[show]")
  .preload
  .placeholder
  transition(name="trial" appear)
    .content
      .form-wrapper.image-after-login
        .flip-img-wrapper
          transition(name="fade-profile-pic")
            img.user-profile(v-if="name === 'user'" :src="imgSrc" alt="user-profile-pic")
            icon.user-icon.image-after-login(v-if="name !== 'user'" name="user-circle")
        form.animate-form
          .textbox-wrapper
            input.text-box(v-model="name" type="text" autocomplete="username")
            span.user-o-icon
              icon(name="user")
          .textbox-wrapper
            input.text-box(v-model="pass" type="password" autocomplete="current-password")
            span.lock-icon
              icon(name="lock")
          button.btn.submit-btn(type="submit" v-on:click.prevent="onSubmit")
            span.login-text LOGIN
          p.text Forgot your password? Click
          p.text Already have acount? Sign In
          p.text.footer-text Register your new account
          button.btn.submit-btn(type="button" v-on:click.prevent="onRegister")
            span.login-text REGISTER
          google-login(:params="params" id="gools")
            icon(name="brands/google" color="white")
</template>

<script>
import GoogleLogin from 'vue-google-login'

export default {
  components: { GoogleLogin },
  data() {
    return {
      show: '',
      name: '',
      pass: '',
      imgSrc: require('@/assets/userTwo.jpg'),
      params: {
        client_id: "x"
      }
    }
  },
  methods: {
    onSubmit() {
      this.show = 'activeDashboard'
      setTimeout(() => {
        this.$router.push('/dashboard')
      }, 2000)
    },
    onRegister() {
      this.show = 'activeRegister'
      setTimeout(() => {
        this.$router.push('/register')
      }, 2000)
    },
    customHook() {
      console.log('on render')
    },
    click() {
      console.log('clicked')
    },
    beforeCreate() {
      let imageOne = new Image()
      imageOne.src = require('@/assets/userOne.jpg')
      let imageTwo = new Image()
      imageTwo.src = require('@/assets/userTwo.jpg')
      let imageThree = new Image()
      imageThree.src = require('@/assets/userThree.jpeg')
      let imageFour = new Image()
      imageFour.src = require('@/assets/eventOne.jpg')
      let imageFive = new Image()
      imageFive.src = require('@/assets/eventTwo.jpg')
      let imageSix = new Image()
      imageSix.src = require('@/assets/eventThree.jpeg')
    }
  }
}
</script>

<style lang="scss" scoped>

@import '@/styles/views/login-page.scss'

</style>

<style lang="stylus" scoped>
#gools
  background-color blue
  border-radius 5px
  margin-top 5px
  padding-top 5px
</style>
