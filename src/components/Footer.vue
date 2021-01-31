<template>
  <div class="footer">
    <div class="content">
      <div class="item">
        <img src="../../public/image/public.png" alt="">
        <div>公众号二维码</div>
      </div>
      <div class="item">
        <img src="../../public/image/miniapp.png" alt="">
        <div>小程序二维码</div>
      </div>
      <div class="content_des">远离亚健康，重新定义健康生活方式。</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  height: 262px;
  background-color: #282828;
  .content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;
    .item {
      text-align: center;
      font-size: 18px;
      line-height: 25px;
      color: #fff;
      margin: 49px 52px 0 0 ;
      img {
        width: 120px;
        padding-bottom: 28px;
      }
    }
    .content_des {
      font-size: 24px;
      line-height: 262px;
      color: #fff;
    }
  }
}
</style>