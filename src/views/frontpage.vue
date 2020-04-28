<template>
<div class="outer">
    <div class="inner" v-for='(data,index) in processedPosts' :key='index'>
       <div class="card" v-for='info in data' :key="info.id">
          <img :src='info.img' alt=""/><br>
       </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      datalist: []
    }
  },
  computed: {
    processedPosts () {
      const posts = this.datalist
      // Put Array into Chunks
      let i
      let j
      const chunkedArray = []
      const chunk = 5
      for (i = 0, j = 0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i, i + chunk)
      }
      return chunkedArray
    }
  },
  methods: {
  },
  mounted () {
    this.axios({
      url: 'https://api.apiopen.top/getImages ',
      methods: 'get'
    }).then(res => {
      console.log(res.data)
      this.datalist = res.data.result
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
<style scoped>
.outer{
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.inner{
  width: 25%;
  height: 100%;
}
.card{
height: 200px;
width: 100%;
margin: 10px 5px;
padding: 10px;
}
.card img{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
