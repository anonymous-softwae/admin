import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontPage from '@/views/frontpage.vue'
import SideBarEquipInfo from '@/components/SideBar_EquipInfo.vue'
import SideBarCharts from '@/components/SideBar_Charts.vue'
import SideBarFrontPage from '@/components/SideBar_FrontPage.vue'
import TopBar from '@/components/TopBar.vue'
import EquipInfo from '@/views/EquipInfo.vue'
import Login from '@/views/Login.vue'
import Chart from '@/views/Charts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/FrontPage',
    name: 'FrontPage',
    components: {
      TopBar: TopBar,
      SideBar: SideBarFrontPage,
      content: FrontPage
    }
  },
  {
    path: '/EquipInfo',
    name: 'EquipInfo',
    components: {
      TopBar: TopBar,
      SideBar: SideBarEquipInfo,
      content: EquipInfo 
    }
  },
  {
    path: '/Charts',
    name: 'Charts',
    components: {
      TopBar: TopBar,
      SideBar: SideBarCharts,
      content: Chart
    }
  },
  {
    path: '/Login',
    name: 'Login',
    components: {
      Login: Login
    }
  },
  {
    path: '*',
    name: 'all',
    components: {
      Login: Login
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
