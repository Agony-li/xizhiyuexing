<template>
  <div>
    <!-- 头部组件 -->
    <Header></Header>
    <img src="../image/1.png" alt="" srcset="">
    <img src="../image/2.png" alt="" srcset="">
    <img src="../image/3.png" alt="" srcset="">
    <img src="../image/4.png" alt="" srcset="">
    <img src="../image/5.png" alt="" srcset="">
    <img src="../image/6.png" alt="" srcset="">
    <!-- footer组件 -->
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components:{
    Header,
    Footer
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  display: block;
}
</style>