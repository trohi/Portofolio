import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import emailjs from 'emailjs-com'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created(){
    AOS.init();
    emailjs.init('user_xMsPKWbJ2VG052z0X8Qz0')
  },
  render: h => h(App)
}).$mount('#app')
