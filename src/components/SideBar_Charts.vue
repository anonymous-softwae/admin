<template>
<div class="sideContainer">
    <div class="sidebar">
      <div class="head">
        <v-icon :name="this.$store.state.barlist[2].iconname" :title="this.$store.state.barlist[2].title" class="v-icon" scale="1.2"/>
        <span>{{this.$store.state.barlist[2].title}}</span>
      </div>
        <ul>
            <li v-for="list in this.$store.state.barlist" :key="list.index"><a href="#"><v-icon :name="list.iconname" :title="list.title" class="v-icon"/><span>{{list.txt}}</span></a></li>
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
  mounted: function () {
    $('#display_btn').click(function () {
      if (!$('#check').is(':checked')) {
        $('.sidebar').css('width', '220px')
        $('.sidebar .head span').css('display', 'inline')
        $('.sidebar .head').css('padding-left', '20px')
        $('ul li:hover a').css('padding-left', '50px')
        $('.change_btn #display_btn').css('left', '215px')
        $('.sidebar ul span').css('display', 'inline')
        $('.sidebar ul li a').css('padding-left', '40px')
      } else {
        $('.sidebar').css('width', '60px')
        $('.sidebar .head span').css('display', 'none')
        $('.sidebar .head').css('padding-left', '16px')
        $('ul li:hover a').css('padding-left', '')
        $('.change_btn #display_btn').css('left', '55px')
        $('.sidebar ul span').css('display', 'none')
        $('.sidebar ul li a').css('padding-left', '20px')
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.sideContainer{
    height: 100%;
    position: relative;
    border: none;
}
.sidebar{
    padding-top:72px;
    width: 60px;
    height: 100%;
    position: relative;
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
.sidebar .head{
  color: rgb(2, 117, 218);
  padding-left: 16px;
  line-height: 70px;
  font-size: 18px;
  font-weight: 500;
  user-select: none;
  transition: 0.6s;
}
.sidebar .head span{
  display: none;
}
.sidebar ul li a{
    display: block;
    height: 100%;
    width: 100%;
    line-height: 55px;
    font-size: 16px;
    transition: 0.6s;
    color:aliceblue;
    padding-left: 20px;
    border-bottom:1px solid rgba(255,255,255,.1);
}
.sidebar ul li span{
  display: none;
};
ul li:hover a{
    padding-left: '';
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
    left: 55px;
    z-index: 9999;
    cursor: pointer;
}
.change_btn #check{
    display: none;
}
</style>
