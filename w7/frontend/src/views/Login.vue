<template lang="pug">
.wrapper(:class="[show ? 'activeClass' : '']")
  .preload
  .placeholder
  transition(name="trial" appear)
    .content
      .form-wrapper.image-after-login
        .flip-img-wrapper
          transition(name="fade-profile-pic")
            img.user-profile(v-if="name === 'user'" :src="imgSrc" alt="user-profile-pic" v-image)
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
          p.text Forgot your password?
          p.text.footer-text Already have acount? Sign In
</template>

<script>
export default {
  data() {
    return {
      show: false,
      name: '',
      pass: '',
      imgSrc: require('@/assets/userTwo.jpg')
    }
  },
  methods: {
    onSubmit() {
      this.show = true
      setTimeout(() => {
        this.$router.push('/dashboard')
      }, 5000)
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
