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
        <div class="module">
          <div class="module_text">
            <div class="text_title">五大模块</div>
            <div class="text_des">通过动（运动训练）、眠（睡眠管理）、静（放松训练）、纳（饮食管理）、悟（心理建设）五个方面的学习和训练，帮助用户重建生活方式，提升心理健康水平，疗愈亚健康。每个模块力求做到可量化、可执行、有反馈、可测量，极大提升训练计划的执行效率和疗愈效果，只要两个月、效果看得见。</div>
          </div>
          <div class="images">
            <img src="../../public/image/five_module.png" alt="">
          </div>
        </div>
        <div class="module margin60">
          <div class="images">
            <img src="../../public/image/six_module.png" alt="">
          </div>
          <div class="module_text">
            <div class="text_title">六大体系</div>
            <div class="text_des">基于CBT疗法、营养学、运动医学、助推系统、黄帝内经、智能心理六个子体系建立的健康管理系统，运用中国传统医学理论和移动互联网助推管理系统（Mobile internet-Nudging）对客户进行全方位健康管理，全面提升客户的身心健康水平，从源头上解决亚健康问题。</div>
          </div>
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
    .title {
      padding-top: 69px;
      font-size: 32px;
      line-height: 47px;
      padding-bottom: 12px;
      font-weight: 700;
      text-align: center;
    }
    .title_line {
      width: 120px;
      height: 6px;
      border-radius: 3px;
      background-color: #43B68F;
      margin: 0 auto;
      text-align: center;
    }
    .module {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 60px;
      .module_text {
        .text_title {
          font-size: 28px;
          line-height: 41px;
          font-weight: 700;
        }
        .text_des {
          max-width: 517px;
          padding-top: 31px;
          font-size: 18px;
          color: #606266;
          line-height: 30px;
        }
      }
      .images {
        img {
          width: 575px;
        }
      }
    }
  }
}
</style>