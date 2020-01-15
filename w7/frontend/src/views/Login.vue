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
        el-form.animate-form
          el-form-item
            el-input(v-model="name" autocomplete="username")
          el-form-item
            el-input(v-model="pass" autocomplete="current-password"  show-password)

          div.reg(v-if="registering")
            el-form-item
              el-input(v-model="fullName" placeholder="fullname")
            el-form-item
              el-input(v-model="email" placeholder="email")

          el-form-item.action
            icon(v-if="registering" name="arrow-left" slot="label" @click="registering = false" style="cursor: pointer")
            el-button(v-if="!registering" type="primary" v-on:click.prevent="onSubmit") LOGIN
            el-button(:type="registering ? 'primary' : ''" v-on:click.prevent="onRegister") REGISTER
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
      email: '',
      fullName: '',
      imgSrc: require('@/assets/userTwo.jpg'),
      params: {
        client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID
      },
      registering: false,
      reg: 'op'
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
      if (this.registering) {
        // do real register
      } else {
        this.registering = true
      }
    },
    splash() {
      this.$router.replace('/splash')
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
