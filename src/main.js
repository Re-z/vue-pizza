import Vue from 'vue'
import App from './App.vue'
import Heading from './components/Header';
import Slider from './components/Slider';

Vue.config.productionTip = false
Vue.component('app-header', Heading)
Vue.component('app-slider', Slider)

new Vue({
  render: h => h(App),
}).$mount('#app')
