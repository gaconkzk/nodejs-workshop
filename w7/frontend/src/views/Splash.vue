<template lang="pug">
.splashscreen-wrapper
  transition(@leave="leaveEl" v-on:after-appear="leaveEl" appear)
    .logo-wrapper
  .logo-letters-group
    template(v-for="(item, index) in logoName")
      span.logo-letter(v-if="item === 'heart'")
        icon(name="heart" color="red")
      span.logo-letter(v-if="item === 'img'")
        img(src="@/assets/logo-icon-lg.png")
      span.logo-letter(v-else) {{item}}
</template>

<script>
export default {
  name: 'SplashScreen',
  data () {
    let quote = 'BUILD WITH x AT f THE FLIES'.split('')
    let logoName = quote.map(c => c === 'x' ? 'heart' : (c === 'f' ? 'img' : c))
    return {
      show: true,
      logoName
    }
  },
  methods: {
    leaveEl() {
      this.$router.push(`/login`)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/views/splash'
</style>
