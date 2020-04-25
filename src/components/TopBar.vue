<template>
    <Menu id="menu" mode="horizontal" :theme="theme1" >
        <div class="logo"><img src="@/assets/zhongwen.png"></div>
        <div class="nav">
            <MenuItem name="1">
                <v-icon name="home" title="信息概览" class="v-icon"/>
                <span>我的首页</span>
            </MenuItem>
            <MenuItem name="2">
                <v-icon name="hdd" title="设备信息" class="v-icon"/>
                <span>设备信息</span>
            </MenuItem>
            <MenuItem name="3">
                <v-icon name="chart-bar" title="图谱分析"  class="v-icon"/>
                <span>图谱分析</span>
            </MenuItem>
            <MenuItem name="4">
                <v-icon name="tools" title="设备维护"  class="v-icon"/>
                <span>故障维护</span>
            </MenuItem>
            <MenuItem name="5">
                <v-icon name="receipt" title="报表系统"  class="v-icon"/>
                <span>报表管理</span>
            </MenuItem>
            <MenuItem name="6">
                <v-icon name="cog" title="系统设置"  class="v-icon"/>
                <span>系统设置</span>
            </MenuItem>
        </div>
        <div class="Gadget">
            <div class="search"><Input search enter-button placeholder="搜索..."/></div>
            <div class="login"><v-icon name="user" class="v-icon"/><span>登录</span></div>
        </div>
    </Menu>
</template>
<script>
export default {
  data () {
    return {
      theme1: 'light'
    }
  },
  mounted: function () {
  }
}
</script>
<style lang="scss" scoped>
 #menu{
    background:#fff;
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
        width: 50px;
        display: inline-block;
        margin: 12px auto;
    }
}
.Gadget{
    float: right;
    display: flex;
    flex-flow: row nowrap;
    margin-right: 15px;
}
.search{
    line-height: 55px;
    margin: auto 20px;
}
.login {
    line-height: 55px;
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
</style>
