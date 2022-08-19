import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export const AppBeerProjectUri = 'https://api.punkapi.com/v2/'
export const AppBeerProjectRepo = Vue.axios
