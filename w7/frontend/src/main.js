import Vue from 'vue'

import 'normalize.css/normalize.css'

import 'animate.css/animate.css'

import './plugins'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import './permission'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
