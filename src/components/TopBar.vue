<template>
    <Menu class="menu" mode="horizontal" :theme="theme1" >
            <div calss="nav">
                <MenuItem name="1">
                    <Icon type="ios-paper" />
                    <span>首页</span>
                </MenuItem>
                <MenuItem name="2">
                    <Icon type="ios-people" />
                    <span>基本设置</span>
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-construct" />
                    <span>页面管理</span>
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="ios-construct" />
                    <span>商品管理</span>
                </MenuItem>
                <MenuItem name="5">
                    <Icon type="ios-construct" />
                    <span>订单管理</span>
                </MenuItem>
                <MenuItem name="6">
                    <Icon type="ios-construct" />
                    <span>库存管理</span>
                </MenuItem>
                <MenuItem name="7">
                    <Icon type="ios-construct" />
                    <span>用户管理</span>
                </MenuItem>
            </div>
        <div class="login"><Icon type="md-person" /><span>登录</span></div>
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
.menu{
    background:#fff;
    width: 100%;
    color:#515a6e;
    overflow: hidden;
    height: 62px;
    position: fixed;
}
.nav{
    width: 500px;
    margin-left: 50px;
}
.login {
    float: right;
    margin-right: 80px;
    padding: 0 20px;
    z-index: 1000;
    transition: all .2s ease-in-out;
}
.login i{
    font-family: Ionicons;
    font-size: 22px;
    margin-right: 10px;
}
.login:hover{
    color: #2d8cf0;
    border-bottom: 2px solid #2d8cf0;
    cursor: pointer;
}
</style>
