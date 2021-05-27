import SelectTable from './components/select-table'
const SAIQUNUI = {
  // 这里是后续补充的组件
  SelectTable
}

const install = function(Vue, opts = {}) {
  if (install.installed) return
  Object.keys(SAIQUNUI).forEach(key => {
    Vue.component(key, SAIQUNUI[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue) // 通过use方式全部引入
}

const API = {
  install,
  ...SAIQUNUI
}

export default API // 通过插件单独引入
