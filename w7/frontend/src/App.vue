<template lang="pug">
  #app
    .component-wrapper
      router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus" scoped>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased,
  -moz-osz-font-smoothing antialiased,
  color #2c3e50
  padding 5%
  text-align center
  background-image url(./assets/bg.png)
  background-repeat no-repeat
  box-sizing border-box
  height 100vh
  width 100vw
  background-size cover
  filter grayscale(30%)
  .component-wrapper
    box-shadow 5px 5px 5px 5px rgba(0, 0, 0, 0.2)
    height 100%
    background white
    overflow hidden
</style>
