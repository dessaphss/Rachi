import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContainer from '../components/MainContainer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'rachi',
    component: MainContainer
  }
]

const router = new VueRouter({
  routes
})

export default router
