import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 侧边栏的栏目显示信息状态
    headlist: {
      name: 'home',
      title: '我的首页'
    },
    barlist: [
      {
        name: 'hdd',
        title: '设备信息',
        txt: '设备信息'
      },
      {
        name: 'chart-bar',
        title: '图谱分析',
        txt: '图谱分析'
      },
      {
        name: 'tools',
        title: '故障维护',
        txt: '故障维护'
      },
      {
        name: 'receipt',
        title: '报表管理',
        txt: '报表管理'
      },
      {
        name: 'cog',
        title: '系统设置',
        txt: '系统设置'
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
