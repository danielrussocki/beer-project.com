import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './app.router'
/* theming */
import vuetify from './application/themes/app.main.theme'
import './application/themes/app.main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
