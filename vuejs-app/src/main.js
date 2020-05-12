import Vue from 'vue'
import Accueil from './Accueil.vue'
import router from './router.js'

new Vue({
  router,
  el: '#accueil',
  render: h => h(Accueil)
})
