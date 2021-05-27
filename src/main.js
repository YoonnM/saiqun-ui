import Vue from 'vue'
import App from './App.vue'
import saiqunui from './index.js'

Vue.use(saiqunui)

new Vue({
  el: '#app',
  render: h => h(App)
})
