import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headlist: {
      id: 0,
      name: 'home',
      title: '我的首页'
    },
    // 菜单栏对象
    barlist: [
      {
        id: 2,
        name: 'hdd',
        title: '设备信息',
        txt: '设备信息'
      },
      {
        id: 3,
        name: 'chart-bar',
        title: '图谱分析',
        txt: '图谱分析'
      },
      {
        id: 4,
        name: 'tools',
        title: '故障维护',
        txt: '故障维护'
      },
      {
        id: 5,
        name: 'receipt',
        title: '报表管理',
        txt: '报表管理'
      },
      {
        id: 6,
        name: 'cog',
        title: '系统设置',
        txt: '系统设置'
      }
    ],
    selectlist: []
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
