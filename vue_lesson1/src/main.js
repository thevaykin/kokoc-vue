import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './directives/color'
import BlurDirective from './directives/blur'

Vue.config.productionTip = false

Vue.directive('color', ColorDirective);
Vue.directive('blur', BlurDirective);

new Vue({
  render: h => h(App),
}).$mount('#app')
