<template>
    <Menu id="menu" mode="horizontal" theme="light" >
        <div class="logo"><img src="@/assets/logo.png"></div>
        <div class="nav" >
           <MenuItem name="1" @click.native="menuclick1">
                <router-link to="/FrontPage" ><v-icon :name="this.$store.state.barlist[0].iconname" :title="this.$store.state.barlist[0].title" class="v-icon" />
                <span>{{this.$store.state.barlist[0].txt}}</span></router-link>
            </MenuItem>
            <router-link to="/EquipInfo"><MenuItem name="2" @click.native="menuclick2">
                <v-icon :name="this.$store.state.barlist[1].iconname" :title="this.$store.state.barlist[1].title" class="v-icon"/>
                <span>{{this.$store.state.barlist[1].txt}}</span>
            </MenuItem></router-link>
            <router-link to="/Charts"><MenuItem name="3" ref='menuitem' tagname='3' @click.native="menuclick">
                <v-icon :name="this.$store.state.barlist[2].iconname" :title="this.$store.state.barlist[2].title"  class="v-icon"/>
                <span>{{this.$store.state.barlist[2].txt}}</span>
            </MenuItem></router-link>
            <MenuItem name="4" ref='menuitem1' :tagname='0' @click.native="menuclick">
                <v-icon :name="this.$store.state.barlist[3].iconname" :title="this.$store.state.barlist[3].title"  class="v-icon"/>
                <span>{{this.$store.state.barlist[3].txt}}</span>
            </MenuItem>
            <MenuItem name="5"  ref='menuitem' tagname='5' @click.native="menuclick">
                <v-icon :name="this.$store.state.barlist[4].iconname" :title="this.$store.state.barlist[4].title"  class="v-icon"/>
                <span>{{this.$store.state.barlist[4].txt}}</span>
            </MenuItem>
            <MenuItem name="6"  ref='menuitem' tagname='6' @click.native="menuclick">
                <v-icon :name="this.$store.state.barlist[5].iconname" :title="this.$store.state.barlist[5].title"  class="v-icon"/>
                <span>{{this.$store.state.barlist[5].txt}}</span>
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
  props: ['tagname'],
  methods: {
    // 显示全屏方法
    screenExpan () {
      if (!screenfull.isEnabled) {
        this.$Message.warning('不支持全屏')
        return false
      }
      screenfull.toggle()
    },
    menuclick1 () {
      console.log('hello')
      var menulist = 0
      console.log(menulist)
      this.$store.commit('barlistchange', menulist)
    },
    menuclick2 () {
      console.log('hello')
      var menulist = 1
      console.log(menulist)
      this.$store.commit('barlistchange', menulist)
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
    margin: 0px 10px 0 0;
    vertical-align:text-bottom;
}
.ivu-menu-item {
    padding: 0 10px!important;
    margin: 0 5px;
}
.screenfull{
    position: absolute;
    right: 20px;
    top: 20px;
}
</style>
