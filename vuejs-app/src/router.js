import Vue from 'vue'
import VueRouter from 'vue-router'

import Synthese from './Synthese.vue'
import Notesdecours from './Notesdecours.vue'
import Exercices from './Exercices.vue'
Vue.use(VueRouter) 

const routes =
[
    { path: "/accueil/synthese", component: Synthese},
    { path: "/accueil/notesdecours", component: Notesdecours},
    { path: "/accueil/exercices", component: Exercices}
]

export default new VueRouter ({routes})