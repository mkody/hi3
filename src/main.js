import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-awesome/icons/brands/google-play'
import 'vue-awesome/icons/brands/android'
import 'vue-awesome/icons/brands/app-store-ios'
import 'vue-awesome/icons/desktop'
import 'vue-awesome/icons/brands/apple'
import 'vue-awesome/icons/brands/discord'
import 'vue-awesome/icons/brands/facebook'
import 'vue-awesome/icons/brands/twitter'
import 'vue-awesome/icons/brands/youtube'
import 'vue-awesome/icons/brands/reddit-alien'
import 'vue-awesome/icons/calendar'
import 'vue-awesome/icons/info-circle'
import Icon from 'vue-awesome/components/Icon'

Vue.component('v-icon', Icon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
