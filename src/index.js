import SelectTable from './components/select-table/index.js'
const components = {
  // 这里是后续补充的组件
  SelectTable
}

const install = function(Vue, opts = {}) {
  if (install.installed) return
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue) // 通过use方式全部引入
}

const API = {
  install,
  ...components
}

export default API // 通过插件单独引入
