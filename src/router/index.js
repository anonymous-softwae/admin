import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontPage from '@/views/FrontPage.vue'
import BasicSets from '@/views/BasicSets.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/FrontPage',
    name: 'FrontPage',
    component: FrontPage
  },
  {
    path: '/BasicSets',
    name: 'BasicSets',
    component: BasicSets
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
