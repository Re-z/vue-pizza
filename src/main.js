import Vue from 'vue'
import App from './App.vue'
import Heading from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import ScrollReveal from 'vue-scroll-reveal';
import Subscribe from './components/Subscribe';

Vue.config.productionTip = false
Vue.component('app-header', Heading)
Vue.component('app-footer', Footer)
Vue.component('app-slider', Slider)
Vue.component('app-menu', Menu)
Vue.component('app-sidebar', Sidebar)
Vue.component('app-subscribe', Subscribe)

Vue.use(ScrollReveal, {
  duration: 800,
  scale: 1,
  delay: '300',
  distance: '100px',
  opacity: 0.5,
  
})

new Vue({
  el: '#app',
  render: h => h(App),
})
