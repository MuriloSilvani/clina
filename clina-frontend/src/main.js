import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faChevronLeft, faUser, faClock, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

library.add(
  faChevronDown,
  faChevronLeft,
  faUser,
  faClock,
  faSignOutAlt
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
