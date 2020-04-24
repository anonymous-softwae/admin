<template>
    <div class="NavBarContainer">
        <div class="scalable">
            <div class="content">

            </div>
            <div class="separator">
                <i></i><i></i>
            </div>
        </div>
        <div class="main">
            <div class="content">
                <!-- hello world! -->
            </div>
        </div>
    </div>
</template>
<style scoped>
.NavBarContainer{
    display: flex;
    margin: 0;
    min-height: 100%;
    /* user-select: none;
    -webkit-user-select: none; */
}
.scalable{
    background-color: #9ce79c;
    position: relative;
    min-width: 0px;
    max-width: calc(100vw-10px);
}
.main{
    background-color:  rgb(197, 196, 196);
    flex:1;
}
.content{
    padding: 0px;
}
.scalable .separator{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    right:0;
    width: 10px;
    height: 100%;
    background-color: #656666;
    box-shadow:  0px 0px 2px rgb(0,0,0,.35);
    cursor: col-resize;
}
.scalable .separator i{
    display: inline-block;
    height: 14px;
    width: 1px;
    background-color: rgb(184, 182, 182);
    margin: 0 1px;
}
.scalable .content{
    padding-right: 34px;
}
.scalable .content img{
    display: block;
    max-width: 100%;
    margin: auto;
}
</style>
<script>

export default {
  mounted: function () {
    var startX, newWidth, startWidth
    startWidth = localStorage.getItem('scalable_width') || getScalableDivWidth()
    document.querySelector('.separator').addEventListener('mousedown', startDrag)
    document.querySelector('.scalable').style.width = startWidth + 'px'
    function startDrag (e) {
      startX = e.clientX
      startWidth = getScalableDivWidth()
      document.documentElement.addEventListener('mouseover', onDrag)
      document.documentElement.addEventListener('mouseup', stopDrag)
    }
    function onDrag (e) {
      newWidth = startWidth + e.clientX - startX
      document.querySelector('.scalable').style.width = newWidth + 'px'
    }
    function stopDrag (e) {
      localStorage.setItem('scalable_width', getScalableDivWidth())
      document.documentElement.removeEventListener('mouseover', onDrag)
      document.documentElement.removeEventListener('mouseup', stopDrag)
    }
    function getScalableDivWidth () {
      return parseInt(window.getComputedStyle(document.querySelector('.scalable')).width, 10)
    }
  }
}
</script>
