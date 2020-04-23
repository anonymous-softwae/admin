<template>
    <div class="sidebar">
        <header>
            机组状态检测系统
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
    </div>
</template>
<style scoped>
.sidebar{
    width: 220px;
    height: 100%;
    background-color: #455055;
}
.sidebar header{
    font-size: 18px;
    color:white;
    text-align: center;
    line-height: 70px;
    background-color: #455055;
    user-select: none;
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
    border-bottom: 1px solid rgb(189, 189, 189,.1);
    transition: .4s;
}
ul li:hover a{
    padding-left: 50px;
    color: cornflowerblue;
}
.v-icon{
    margin-right: 16px;
    font-size: 18px;
}

</style>
