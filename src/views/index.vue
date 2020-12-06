<template>
  <div>
    <!-- 头部组件 -->
    <Header></Header>
    <!-- banner -->
    <div class="banner"></div>
    <!-- 公司介绍 -->
    <div class="des">
      <img src="../../public/image/des.png" alt="">
      <div class="des_text">
        <span>
            北京喜知悦行健康管理有限公司是一家通过生活方式管理和心理
          建设等方式，为用户提供改善睡眠、减脂塑身、增强抵抗力、精力管
          理等服务的专业健康管理机构，致力于应用最新科技，更安全、更高
          效地从根源上解决一系列亚健康问题。
        </span>
      </div>
    </div>
    <!-- CBT-PLUS健康管理系统 -->
    <div class="cbt">
      <div class="main">
        <div class="title">CBT-PLUS健康管理系统</div>
        <div class="title_line"></div>
        <div class="content">
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  data() {
    return {};
  },
  components:{
    Header
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  background-image: url('../../public/image/banner.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.des {
  max-width: 1200px;
  height: 564px;
  margin: 0 auto;
  position: relative;
  img {
    width: 622px;
    padding-top: 72px;
    display: block;
  }
  .des_text {
    background-color: #43B68F;
    width: 712px;
    height: 304px;
    position: absolute;
    top: 178px;
    left: 488px;
    padding: 66px 56px 74px;
    box-sizing: border-box;
    text-indent: 2em;
    span {
      font-size: 20px;
      line-height: 41px;
      color: #fff;
    }
  }
}
.cbt {
  width: 100%;
  height: 1345px;
  box-sizing: border-box;
  background-image: url('../../public/image/cbt_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 1345px;
  background-position: center;
  .main {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    .title {
      padding-top: 69px;
      font-size: 32px;
      line-height: 47px;
      padding-bottom: 12px;
    }
    .title_line {
      width: 120px;
      height: 6px;
      border-radius: 3px;
      background-color: #43B68F;
      margin: 0 auto;
    }
  }
}
</style>