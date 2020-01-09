<template lang="pug">
  v-app-bar(app style="height: 65px")
      v-layout(style="margin-top: 30px")
        v-flex
          router-link(:to="{ name: 'Home' }")
        v-flex
          v-text-field(
            prepend-inner-icon="mdi-magnify"
            solo)
        v-flex
          v-tooltip(bottom)
            template(v-slot:activator="{ on }")
              v-btn(icon v-on="on")
                v-icon mdi-finance
            span Popular
          v-tooltip(bottom)
            template(v-slot:activator="{ on }")
              v-btn(icon v-on="on")
                v-icon mdi-poll
            span All
        v-flex
        v-menu(offset-y)
          template(v-slot:activator="{ on }")
            v-hover
              v-card(v-on="on" style="height: 55px; width: 250px")
                v-layout(row)
                  v-flex.col-4(style="max-width:56px; padding-left:15px")
                    img(src="../assets/logo.png"
                    height="35px" width="35px")
                  v-flex.col-7
                    v-layout(column style="margin-top: -5px")
                      v-flex
                        span aaaaaa
                  v-flex.col-1
                    v-icon(style="margin-top:10px") mdi-menu-down

            //- v-btn(v-on="on") User Name
            //- //- v-icon mdi-menu-down
          v-list
            v-list-item(@click="")
              v-list-item-title Login
            v-list-item(@click="logout()")
              v-list-item-title Logout
</template>

<script>
export default {
  name: 'TopMenu',
}
</script>

<style scoped lang="stylus">

</style>
