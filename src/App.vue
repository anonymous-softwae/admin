<template>
    <Layout id="layout">
      <header><TopBar></TopBar></header>
      <Layout id="sublayout">
        <SideBar></SideBar>
        <Content id="content"></Content>
        <!-- <router-view></router-view> -->
      </Layout>
    </Layout>
</template>
<script>
import TopBar from '@/components/TopBar'
import SideBar from '@/components/SideBar'
import Vue from 'vue'
Vue.component('TopBar', TopBar)
Vue.component('SideBar', SideBar)
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
      padding-top: 62px;
      height: 100%;
      display: flex;
      flex-flow: row nowrap;
    }
    #content{
      height: 100%;

    }
</style>
