import Vue from 'vue'
import App from './App.vue'
// import ColorDirective from './directives/color'
// import BlurDirective from './directives/blur'
import Plugin from './plugins/Plugin'

Vue.config.productionTip = false

Vue.use(Plugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
