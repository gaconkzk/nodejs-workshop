import Vue from 'vue';

import anime from 'animejs'

const VueAnime = {
  install(Vue) {
    Vue.prototype.$anime = anime
  }
}

Vue.use(VueAnime)
