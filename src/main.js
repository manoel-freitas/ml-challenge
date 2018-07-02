import Vue from 'vue'
import Meta from 'vue-meta'
import App from './App'
import router from './router'
import store from './store'
import Slugfy from './plugins/slugfy'
import Capitalize from './plugins/capitalize'

Vue.use(Meta)
Vue.use(Slugfy)
Vue.use(Capitalize)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
