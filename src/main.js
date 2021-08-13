import Vue from 'vue'
import Vuex from 'vuex'
import Store from './store/index'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  Store,
  render: h => h(App),
}).$mount('#app')
