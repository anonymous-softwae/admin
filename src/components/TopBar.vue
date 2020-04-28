<template>
    <Menu id="menu" mode="horizontal" theme="light" >
        <div class="logo"><img src="@/assets/logo.png"></div>
        <div class="nav">
            <router-link to="/FrontPage"><MenuItem name="1">
                <v-icon name="home" title="信息概览" class="v-icon"/>
                <span>首页</span>
            </MenuItem></router-link>
            <router-link to="/EquipInfo"><MenuItem name="2">
                <v-icon name="hdd" title="设备状态" class="v-icon"/>
                <span>机组状态</span>
            </MenuItem></router-link>
            <router-link to="/Charts"><MenuItem name="3">
                <v-icon name="chart-bar" title="图谱分析"  class="v-icon"/>
                <span>图谱</span>
            </MenuItem></router-link>
            <MenuItem name="4">
                <v-icon name="tools" title="设备维护"  class="v-icon"/>
                <span>事件列表</span>
            </MenuItem>
            <MenuItem name="5">
                <v-icon name="receipt" title="报表系统"  class="v-icon"/>
                <span>报表</span>
            </MenuItem>
            <MenuItem name="6">
                <v-icon name="cog" title="系统设置"  class="v-icon"/>
                <span>设置</span>
            </MenuItem>
        </div>
        <v-icon @click="screenExpan" name="expand-arrows-alt" scale="1.5" class="screenfull"/>
        <div class="Gadget">
            <div class="login"><router-link to="/Login"><v-icon name="user" class="v-icon"/><span>登录</span></router-link></div>
            <div class="search"><Input search enter-button placeholder="搜索..."/></div>
        </div>
    </Menu>
</template>
<script>
import screenfull from 'screenfull'
export default {
  data () {
    return {
      isFullscreen: false
    }
  },
  methods: {
    // 显示全屏方法
    screenExpan () {
      if (!screenfull.isEnabled) {
        this.$Message.warning('不支持全屏')
        return false
      }
      screenfull.toggle()
    }
  }
}
</script>
<style lang="scss" scoped>
 #menu{
    background:ghostwhite;
    width: 100%;
    color:#515a6e;
    overflow: hidden;
    height: 62px;
    position: fixed;
}
.logo{
    width: 220px;
    height:60px;
    float: left;
    position: relative;
    text-align: center;
    vertical-align: middle;
    img{
        width: 140px;
        display: inline-block;
        margin: 15px auto 12px auto;
    }
}
.Gadget{
    float: right;
    display: flex;
    flex-flow: row nowrap;
    margin-right: 65px;
}
.search{
    line-height: 62px;
    margin: auto;
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
    margin: 0 10px;
    vertical-align:text-bottom;
}
.ivu-menu-item {
    padding: 0 10px!important;
}
.screenfull{
    position: absolute;
    right: 20px;
    top: 20px;
}
</style>
