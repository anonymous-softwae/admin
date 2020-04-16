<template>
        <Layout class="layout">
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="74" v-model="isCollapsed" class="side">
                <Menu active-name="1" theme="dark" width="auto" :class="menuitemClasses">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>Item 1</span>
                        </template>
                        <MenuItem name="1-1">
                            <Icon type="ios-navigate"></Icon>
                            <span>Option 1</span>
                        </MenuItem>
                        <MenuItem name="1-2">
                            <Icon type="ios-search"></Icon>
                            <span>Option 2</span>
                        </MenuItem>
                        <MenuItem name="1-3">
                            <Icon type="ios-settings"></Icon>
                            <span>Option 3</span>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>Item 2</span>
                        </template>
                        <MenuItem name="2-1">
                            <Icon type="ios-navigate"></Icon>
                            <span>Option 1</span>
                        </MenuItem>
                        <MenuItem name="2-2">
                            <Icon type="ios-search"></Icon>
                            <span>Option 2</span>
                        </MenuItem>
                        <MenuItem name="2-3">
                            <Icon type="ios-settings"></Icon>
                            <span>Option 3</span>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>Item 3</span>
                        </template>
                        <MenuItem name="3-1">
                            <Icon type="ios-navigate"></Icon>
                            <span>Option 1</span>
                        </MenuItem>
                        <MenuItem name="3-2">
                            <Icon type="ios-search"></Icon>
                            <span>Option 2</span>
                        </MenuItem>
                        <MenuItem name="3-3">
                            <Icon type="ios-settings"></Icon>
                            <span>Option 3</span>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>Item 4</span>
                        </template>
                        <MenuItem name="4-1">
                            <Icon type="ios-navigate"></Icon>
                            <span>Option 1</span>
                        </MenuItem>
                        <MenuItem name="4-2">
                            <Icon type="ios-search"></Icon>
                            <span>Option 2</span>
                        </MenuItem>
                        <MenuItem name="4-3">
                            <Icon type="ios-settings"></Icon>
                            <span>Option 3</span>
                        </MenuItem>
                    </Submenu>
                </Menu>
                <div class="foldIcon">
                 <Icon @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="24"></Icon>
                </div>
            </Sider>
            <Layout>
                <Content :style="{margin: '10px', background: '#fff'}">
                    Content
                </Content>
            </Layout>
        </Layout>
</template>
<script>
export default {
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    }
  }
}
</script>
<style lang="scss" scoped>
    .layout{
        border: 1px solid #d7dde4;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        padding-top: 62px;
        height: 100vh;
    }
    .foldIcon{
        position: fixed;
        bottom:30px;
        color:#d7dde4;
        z-index: 1000;
        left:80px;
    }
    .side{
     overflow:scroll;
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
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: translateX(-56px) rotate(-90deg) ;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateY(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 28px;
    }
    .collapsed-menu ::v-deep .ivu-icon-ios-arrow-down{
        display: none;
        transition: display .2s ease;
    }
</style>
