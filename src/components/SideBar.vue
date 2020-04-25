<template>
<div class="sideContainer">
    <div class="sidebar">
        <header>
            <span>MMS状态监测系统</span>
        </header>
        <ul>
            <li v-for="list in barlist" :key="list.index"><a href="#"><v-icon :name="list.name" :title="list.title" class="v-icon"/><span>{{list.txt}}</span></a></li>
        </ul>
        <div class="change_btn">
            <input type="checkbox" id="check"/>
            <label for="check">
                <v-icon name="caret-right" id="display_btn" scale="3.5"/>
            </label>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      barlist: [
        {
          name: 'home',
          title: '信息概览',
          txt: '信息概览'
        },
        {
          name: 'hdd',
          title: '设备信息',
          txt: '设备信息'
        },
        {
          name: 'chart-bar',
          title: '图谱分析',
          txt: '图谱分析'
        },
        {
          name: 'tools',
          title: '故障维护',
          txt: '故障维护'
        },
        {
          name: 'receipt',
          title: '报表管理',
          txt: '信息报表管理'
        },
        {
          name: 'cog',
          title: '系统设置',
          txt: '系统设置'
        }
      ]
    }
  },
  mounted: function () {
    $('#display_btn').click(function () {
      if (!$('#check').is(':checked')) {
        $('.sidebar').css('width', '60px')
        $('.sidebar header img').css({ width: '40px', margin: '20px auto 10px auto' })
        $('.sidebar header span').css('display', 'none')
        $('.change_btn #display_btn').css('left', '55px')
        $('.sidebar ul li span').css('display', 'none')
        $('.sidebar ul li a').css('padding-left', '20px')
      } else {
        $('.sidebar').css('width', '220px')
        $('.sidebar header img').css({ width: '60px', margin: '15px auto 0px auto' })
        $('.sidebar header span').css('display', '')
        $('.change_btn #display_btn').css('left', '215px')
        $('.sidebar ul li span').css('display', '')
        $('.sidebar ul li a').css('padding-left', '40px')
      }
    })
  }
}
</script>
<style lang="scss">
.sideContainer{
    height: 100%;
    position: relative;
}
.sidebar{
    padding-top: 62px;
    width: 220px;
    height: 100%;
    position: relative;
    transition: width .2s;
    background-color: #455055;
    overflow-y:scroll;
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
.sidebar header{
    font-size: 18px;
    color:white;
    text-align: center;
    line-height: 60px;
    background-color: #455055;
    user-select: none;
}
.sidebar header img{
    width: 60px;
    display: block;
    margin:15px auto 0px auto;
}
.sidebar header span{
    font-size: 18px;
    color: white;
    font-weight: 400;
}
.sidebar ul a{
    display: block;
    height: 100%;
    width: 100%;
    line-height: 55px;
    font-size: 16px;
    color:white;
    padding-left: 40px;
    box-sizing: border-box;
    border-top:1px solid rgba(255,255,255,.1);
    transition: .4s;
}
.sidebar ul li:nth-child(8){
    border-bottom:1px solid rgba(255,255,255,.1);
}
ul li:hover a{
    padding-left: 50px;
    color: cornflowerblue;
}
.v-icon{
    margin-right: 16px;
    font-size: 18px;
}
.change_btn{
    position: absolute;
    background: cadetblue;
    left: 80px;
    bottom: 100px;
}
.change_btn #display_btn{
    color: #455055;
    position: fixed;
    bottom: 45vh;
    left: 215px;
    z-index: 9999;
    cursor: pointer;
}
.change_btn #check{
    display: none;
}
</style>
