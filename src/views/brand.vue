<template>
  <div>
    <!-- 头部组件 -->
    <Header></Header>
    <!-- banner -->
    <div class="banner">
      <div class="banner_des">
        <div class="title">品牌故事</div>
        <div class="des">圣人之道，悟性自足，不假外求，每个人都是自己最好的医生。</div>
      </div>
      <div class="banner_tip">
        <div class="tip_item">
          <div class="title">我们的愿景</div>
          <div class="content">帮助用户健康开悟，促进用户快乐践行，使人远离亚健康</div>
        </div>
        <div class="tip_item">
          <div class="title">我们的使命</div>
          <div class="content">科技赋能，上医治未病</div>
        </div>
        <div class="tip_item">
          <div class="title">我们的价值观</div>
          <div class="content">科学，有爱</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="title">创始人故事</div>
        <div class="brand_content_bg"></div>
      </div>
    </div>
    <!-- footer组件 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  background-image: url("../../public/image/brand_banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

}
.banner_des {
  position: absolute;
  width: 1200px;
  top: 141px;
  left: 50%;
  transform: translateX(-50%);
  .title {
    font-size: 48px;
    line-height: 71px;
  }
  .des {
    margin-top: 42px;
    width: 511px;
    font-size: 32px;
    line-height: 54px;
  }
}
.banner_tip {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  position:absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -59px;
  .tip_item {
    width: 376px;
    height: 198px;
    background: linear-gradient(270deg, #38DFA9 0%, #35C191 100%);
    border-radius: 14px;
    padding: 38px 32px;
    box-sizing: border-box;
    color: #fff;
    .title {
      font-size: 22px;
      line-height: 33px;
    }
    .content {
      font-size: 24px;
      line-height: 36px;
      padding-top: 30px;
    }
  }
}
.container {
  width: 100%;
  height: 1473px;
  background-image: url("../../public/image/brand_bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .content {
    width: 1200px;
    margin: 0 auto;
    padding-top: 134px;
    .title {
      font-size: 34px;
      font-weight: 700;
      border-left: 6px solid #43B68F;
      padding-left: 16px;
    }
    .brand_content_bg {
      margin-top: 36px;
      width: 1200px;
      height: 1169px;
      background-image: url("../../public/image/brand_content_bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>