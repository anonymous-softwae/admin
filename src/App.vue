<template>
    <Layout id="layout">
      <TopBar></TopBar>
      <router-view name="SideBar"></router-view>
      <Content id="content">
          <router-view name="content"></router-view>
      </Content>
    </Layout>
</template>
<script>
import Vue from 'vue'
import TopBar from '@/components/TopBar.vue'
Vue.component('TopBar', TopBar)
export default {

}
</script>
<style lang="scss">
    html,body,#app{
      padding: 0px;
      margin: 0px;
      list-style: none;
      border: none;
    }
    #layout{
      height: 100vh;
      display: flex;
      flex-flow: row nowrap;

    }
   #content{
      background-color: rgb(235, 235, 235);
      padding-top: 62px;
      overflow-y:auto;
      overflow-x:none;
      /* //兼容Firefox隐藏滚动条 */
      scrollbar-width: none;
      /* //兼容IE隐藏滚动条 */
      overflow-y: scroll;
      -ms-overflow-style: none;
      -ms-content-zooming: zoom;
      -ms-scroll-rails: none;
      -ms-content-zoom-limit-min: 100%;
      -ms-content-zoom-limit-max: 500%;
      -ms-scroll-snap-points-x: snapList(100%, 200%, 300%, 400%, 500%);
      -ms-overflow-style: none;
      overflow: auto;
      /* //兼容CHROME隐藏滚动条 */
        &::-webkit-scrollbar {
          display: none;
      }
    }
</style>
