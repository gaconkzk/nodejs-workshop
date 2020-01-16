import Vue from 'vue'
// import axios from 'axios'

const axios = Vue.axios

async function all() {
  return axios.get('/accounts')
}

export default {
  all
}
