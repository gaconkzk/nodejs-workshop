<template lang="pug">
  div
    top-menu()
    router-view( style="margin-top:90px;")
</template>

<script>
// @ is an alias to /src
import TopMenu from '@/components/TopMenu.vue'

export default {
  name: 'home',
  components: {
    TopMenu
  }
}
</script>
