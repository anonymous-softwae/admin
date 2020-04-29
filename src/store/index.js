import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 侧边菜单栏对象
    barlist: [
      {
        id: 1,
        iconname: 'home',
        title: '首页',
        txt: '首页',
        child: [
          {
            childname: 'network-wired',
            title: '组织架构',
            txt: '组织架构'
          },
          {
            childname: 'file-medical-alt',
            title: '实时数据',
            txt: '实时数据'
          },
          {
            childname: 'history',
            title: '历史查询',
            txt: '历史查询'
          },

          {
            childname: 'map-marked-alt',
            title: '总览',
            txt: '总览'
          }
        ]
      },
      {
        id: 2,
        iconname: 'hdd',
        title: '设备状态',
        txt: '设备状态'
      },
      {
        id: 3,
        iconname: 'chart-bar',
        title: '图谱分析',
        txt: '图谱分析'
      },
      {
        id: 4,
        iconname: 'tools',
        title: '故障维护',
        txt: '故障维护'
      },
      {
        id: 5,
        iconname: 'receipt',
        title: '报表管理',
        txt: '报表管理'
      },
      {
        id: 6,
        iconname: 'cog',
        title: '系统设置',
        txt: '系统设置'
      }
    ],
    // 点击顶部导航栏后新获取的元素
    selectlist: []
  },
  mutations: {
    barlistchange (state, arg) {
      state.selectlist = state.barlist[arg].child
      console.log(state.selectlist)
      console.log(state.barlist)
    }
  },
  actions: {
  },
  modules: {
  }
})
