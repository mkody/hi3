import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MarkdownItVue from './components/MarkdownItVue.vue'
import 'vue-awesome/icons/brands/android'
import 'vue-awesome/icons/brands/app-store-ios'
import 'vue-awesome/icons/brands/apple'
import 'vue-awesome/icons/brands/discord'
import 'vue-awesome/icons/brands/facebook'
import 'vue-awesome/icons/brands/google-play'
import 'vue-awesome/icons/brands/reddit-alien'
import 'vue-awesome/icons/brands/twitter'
import 'vue-awesome/icons/brands/windows'
import 'vue-awesome/icons/brands/youtube'
import 'vue-awesome/icons/calendar'
import 'vue-awesome/icons/info-circle'
import Icon from 'vue-awesome/components/Icon'

Vue.component('markdown-it-vue', MarkdownItVue)
Vue.component('v-icon', Icon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
