import Vue from 'vue'
import VueRouter from 'vue-router'
import FrontPage from '@/views/FrontPage.vue'
import SideBarEquipInfo from '@/components/SideBar_EquipInfo.vue'
import SideBarCharts from '@/components/SideBar_Charts.vue'
import SideBarFrontPage from '@/components/SideBar_FrontPage.vue'
import EquipInfo from '@/views/EquipInfo.vue'
import Chart from '@/views/Charts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/FrontPage',
    name: 'FrontPage',
    components: {
      content: FrontPage,
      SideBar: SideBarFrontPage
    }
  },
  {
    path: '/EquipInfo',
    name: 'EquipInfo',
    components: {
      content: EquipInfo,
      SideBar: SideBarEquipInfo
    }
  },
  {
    path: '/Charts',
    name: 'Charts',
    components: {
      content: Chart,
      SideBar: SideBarCharts
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
