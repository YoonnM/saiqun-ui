import Vue from 'vue'
import App from './App.vue'
import saiqunui from './index.js'
let {
  SelectTable
} = saiqunui;
Vue.use(SelectTable);

new Vue({
  el: '#app',
  render: h => h(App)
})
