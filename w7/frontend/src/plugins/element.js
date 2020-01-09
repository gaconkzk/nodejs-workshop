import Vue from 'vue'

import Cookies from 'js-cookie'

import Element from 'element-ui'
import '@/styles/element-variables.scss'

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)

Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})
