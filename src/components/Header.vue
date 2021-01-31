<template>
  <div class="header">
    <img src="../../public/image/logo.png" alt="">
    <div class="nav">
      <div :class="{'active':active=='1'}"><router-link :to="{path:'/', query: {index:'1'}}">首页</router-link></div>
      <div :class="{'active':active=='2'}"><router-link :to="{path:'product', query: {index:'2'}}">产品介绍</router-link></div>
      <div :class="{'active':active=='3'}"><router-link :to="{path:'brand', query: {index:'3'}}">品牌故事</router-link></div>
      <div :class="{'active':active=='4'}"><router-link :to="{path:'aboutus', query: {index:'4'}}">关于我们</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active: '1'
    }
  },
  mounted(){
    this.active = this.$route.query.index? this.$route.query.index : '1'
  },
  methods:{
    // gotoPage(index){
    //   this.active == index
    //   let path =  ''
    //   if(index == 1){
    //     path = '/'
    //   }
    //   if(index == 2){
    //     path = '/brand'
    //   }
    //   if(index == 3){
    //     path = '/product'
    //   }
    //   if(index == 4){
    //     path = '/aboutus'
    //   }
    //   this.$router.push({path: path})
    // }
  }
}
</script>

<style lang="scss" scoped>
.header {
  max-width: 1200px;
  margin: 0 auto;
  height: 113px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  img {
    width: 198px;
    height: 61px;
  }
  .nav {
    display: flex;
    justify-content: space-around;
    div {
      padding-left: 70px;
      cursor:pointer;
    }
    a {
      color: #333;
    }
    .active a{
      color: #43B68F !important;
    }
  }
}
</style>