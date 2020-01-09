import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import vuetify from './plugins/vuetify';
import VeeValidate from 'patched-vee-validate';
import axios from 'axios';

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  let apiUrl = null;
  const myEnv = require('@/env');

  if (myEnv !== null) {
    apiUrl = myEnv.apiUrl;
  }
  if (apiUrl) {
    axios.defaults.baseURL = apiUrl;
    axios.defaults.headers.common = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      };
  }
}

// router.beforeEach((to, from, next) => {
//   if (to.path !== '/login' && to.path !== '/register') {
    router.push('/register');
//     return;
//   }
//   if (to.path === '/login') {
//     router.push('/');
//     return;
//   }
//   next();
// });

const veeConfig = {
  errorBagName: 'veeErrors',
  aria: true,
  classNames: {},
  classes: false,
  delay: 0,
  dictionary: null,
  i18nRootKey: 'validations',
  events: 'input|blur',
  fieldsBagName: 'fields',
  inject: true,
  locale: 'en',
  strict: true,
  validity: false,
};

Vue.use(VeeValidate, veeConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
