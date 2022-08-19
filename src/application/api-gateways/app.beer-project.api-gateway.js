import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

/*
Aquí se agrega más config
en caso de ser necesario

Como las cors, etc...
*/

Vue.use(VueAxios, axios)

export const AppBeerProjectUri = 'https://api.punkapi.com/v2/'
