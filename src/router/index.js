import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontPage from '@/views/frontpage.vue'
import SideBar from '@/components/SideBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/FrontPage',
    name: 'FrontPage',
    components: {
      content: FrontPage,
      SideBar: SideBar
    }
  },
  {
    path: '*',
    name: 'FrontPage',
    components: {
      content: FrontPage
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
