import Vue from 'vue'
// import axios from 'axios'

const axios = Vue.axios

async function register(account) {
  return axios.post('/register', account)
}

export default {
  register
}
