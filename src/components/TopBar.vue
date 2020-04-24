<template>
    <nav>
        <Breadcrumb :style="{margin: '0 0 0 20px',lineHeight:'62px',width:'100%',float:'left'} ">
            <router-link to="/Frontpage"><BreadcrumbItem><v-icon name="home" class="v-icon"/>首页</BreadcrumbItem></router-link>
            <router-link to="/Frontpage"><BreadcrumbItem><v-icon name="align-left" class="v-icon"/>概览</BreadcrumbItem></router-link>
        </Breadcrumb>
        <div class="Gadget">
            <div class="search"><Input search enter-button placeholder="搜索..."/></div>
            <div class="login"><v-icon name="user" class="v-icon"/><span>登录</span></div>
        </div>
    </nav>
</template>
<script>
export default {
  data () {
    return {
      theme1: 'dark'
    }
  },
  mounted: function () {
  }
}
</script>
<style lang="scss" scoped>
 nav{
    background:#fff;
    width: 100%;
    color:#515a6e;
    overflow: hidden;
    height: 62px;
    position: relative
}
.Gadget{
    position: absolute;
    right: 30px;
    display: flex;
    flex-flow: row nowrap;
}
.search{
    line-height: 62px;
    margin: auto 20px;
}
.login {
    line-height: 62px;
    padding: 0 20px;
    z-index: 1000;
    transition: all .2s ease-in-out;
}
.login:hover{
    color: #2d8cf0;
    cursor: pointer;
}
.login .v-icon{
    margin-right: 10px;
    vertical-align:text-bottom;
}
.login span{
    font-size: 16px;
}
.v-icon{
    margin-right: 5px;
    vertical-align:text-bottom;
}
</style>
