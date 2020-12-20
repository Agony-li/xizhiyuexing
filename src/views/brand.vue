<template>
  <div>
    <!-- 头部组件 -->
    <Header></Header>
    <!-- banner -->
    <div class="banner">
      <div class="banner_tip">
        <div class="tip_item">
          <div>我们的愿景</div>
        </div>
        <div class="tip_item">
          <div>我们的使命</div>
        </div>
        <div class="tip_item">
          <div>我们的价值观</div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="title">创始人故事</div>
        <div></div>
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
    margin: 134px auto;
    .title {
      font-size: 34px;
      font-weight: 700;
      border-left: 6px solid #43B68F;
      padding-left: 16px;
    }
  }
}
</style>