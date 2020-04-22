<template>
    <Layout id="layout">
      <header><TopBar></TopBar></header>
      <Layout id="sublayout">
        <SideBar></SideBar>
        <Content id="content">
          <MainContent></MainContent>
        </Content>
        <!-- <router-view></router-view> -->
      </Layout>
    </Layout>
</template>
<script>
import TopBar from '@/components/TopBar'
import SideBar from '@/components/SideBar'
import MainContent from '@/components/MainContent'
import Vue from 'vue'
Vue.component('TopBar', TopBar)
Vue.component('SideBar', SideBar)
Vue.component('MainContent', MainContent)
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
    }
    #sublayout{
      margin-top: 62px;
      height: calc(100vh-62px);
      display: flex;
      flex-flow: row nowrap;
    }
    #content{
      height: 100%;

    }
</style>
