<template lang="pug">
.splashscreen-wrapper
  transition(@leave="leaveEl" v-on:after-appear="leaveEl" appear)
    .logo-wrapper
  .logo-letters-group
    template(v-for="(item, index) in logoName")
      span.logo-letter(v-if="item !== 'img'") {{item}}
      span.logo-letter(v-else)
        img(src="@/assets/logo-icon-lg.png")
</template>

<script>
export default {
  name: 'SplashScreen',
  data () {
    return {
      show: true,
      logoName: [
        'B', 'U', 'I', 'L', 'T', '  ', 'W', 'I', 'T', 'H',
        '  ', '<3', '  ', 'A', 'T', '  ', 'img', '  ', 'G',
        'E', 'E', 'K', 'Y', 'A', 'N', 'T', 'S']
    }
  },
  methods: {
    leaveEl() {
      console.log(this.$route.query)
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/views/splash.scss'
</style>
