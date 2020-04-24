<template>
<div class="sideContainer">
    <div class="sidebar">
        <header>
            <img src="@/assets/zhongwen.png" alt=""/>
            <span>MMS状态监测系统</span>
        </header>
        <ul>
            <li><a href="#"><v-icon name="home" class="v-icon"/>信息概览</a></li>
            <li><a href="#"><v-icon name="hdd" class="v-icon"/>设备信息</a></li>
            <li><a href="#"><v-icon name="chart-bar" class="v-icon"/>图谱分析</a></li>
            <li><a href="#"><v-icon name="info-circle" class="v-icon"/>故障信息</a></li>
            <li><a href="#"><v-icon name="tools" class="v-icon"/>设备维护</a></li>
            <li><a href="#"><v-icon name="receipt" class="v-icon"/>报表系统</a></li>
            <li><a href="#"><v-icon name="cog" class="v-icon"/>系统设置</a></li>
            <li><a href="#"><v-icon name="sign-out-alt" class="v-icon"/>系统退出</a></li>
        </ul>
        <div class="change_btn">
            <input type="checkbox" id="check"/>
            <label for="check">
                <v-icon name="sign-out-alt" id="display_btn"/>
                <v-icon name="sign-out-alt" id="cancel_btn"/>
            </label>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.sideContainer{
    height: 100%;
}
.sidebar{
    width: 220px;
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
.sidebar header{
    font-size: 18px;
    color:white;
    text-align: center;
    line-height: 60px;
    background-color: #455055;
    user-select: none;
}
.sidebar header img{
    width: 50px;
    display: block;
    margin:20px auto 0px auto;
}
.sidebar header span{
    font-size: 18px;
    color: white;
    font-weight: 500;
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
#display_btn{
    color: brown;
}
</style>
