import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/iconfont.css'
import './assets/style/reset.scss'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from "axios"
Vue.config.productionTip = false
FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
