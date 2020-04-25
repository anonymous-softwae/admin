import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import 'view-design/dist/styles/iview.css'
import router from './router'
import 'jquery'
// import store from './store'
Vue.use(ViewUI)
Vue.component('v-icon', Icon)
Vue.config.productionTip = false
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
