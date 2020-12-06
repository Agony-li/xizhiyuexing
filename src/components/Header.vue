<template>
  <div class="header">
    <img src="../../public/image/logo.png" alt="">
    <div class="nav">
      <div>首页</div>
      <div>产品介绍</div>
      <div>品牌故事</div>
      <div>关于我们</div>
    </div>
  </div>
</template>

<script>
export default {

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
    }
  }
}
</style>