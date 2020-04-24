<template>
    <Layout id="layout">
        <SideBar></SideBar>
        <Layout id="sulayout">
          <TopBar></TopBar>
          <Content>
            <router-view></router-view>
          </Content>
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
      text-decoration: none;
      border: none;
    }
    #layout{
      height: 100vh;
      display: flex;
      flex-flow: row nowrap;
    }
    #sulayout{
      height: 100%;
      background-color: rgb(235, 235, 235);
    }
</style>
