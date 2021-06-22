import Vue from 'vue'
import '@/assets/style/index.css'
import '@/assets/style/fonts.css'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
