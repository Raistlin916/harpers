import 'object-assign'
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import './normalize.scss'

import Welcome from './pages/Welcome.vue'
import About from './pages/About.vue'
import Work from './pages/Work.vue'
import Contact from './pages/Contact.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/home', component: Welcome },
    { path: '/about', component: About },
    { path: '/work', component: Work },
    { path: '/contact', component: Contact },
    { path: '*', redirect: '/home' }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
