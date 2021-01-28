<template>
  <div>
		<!-- 头部组件 -->
		<Header></Header>
		<div class="container">
      <div class="content">
        <div class="title">未来展望</div>
        <div class="des">
					<p>上医治未病</p>
					<p>从宏观上讲，亚健康问题是由于现代社会生活方式的巨大变化引起的。从医学上讲，很多亚健康和慢性疾病是一种“适配性疾病”。因此，只有通过重建生活方式和心理建设才能从根本上解决亚健康问题，同时带给每个人全身心的变化、开启焕然一新的人生。</p>
					<p>通过团队将近两年的共同努力，喜知悦行健康管理小程序终于上线了。希望在未来我们可以更进一步，为健康人群和疾病后康复人群提供更多优质的产品和服务，希望我们的工作能为更多人、更多家庭带来幸福和快乐、健康和成功！</p>
				</div>
				<div class="map">
					<img src="../../public/image/map.png" alt="">
				</div>
				<div class="address">
					<div>
						<img src="../../public/image/phone.png" alt="">
						<span>电话：010-64190219</span>
					</div>
					<div>
						<img src="../../public/image/email.png" alt="">
						<span>邮箱：bj_xzyx666@163.com</span>
					</div>
					<div>
						<img src="../../public/image/addr.png" alt="">
						<span>地址：北京市朝阳区利泽中园105号津港大厦318室</span>
					</div>
				</div>
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
.container {
  width: 100%;
  height: 1136px;
  background-image: url("../../public/image/aboutus.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .content {
    width: 1200px;
    margin: 57px auto;
    .title {
      font-size: 34px;
      font-weight: 700;
      border-left: 6px solid #43B68F;
      padding-left: 16px;
    }
		.des {
			margin-top: 36px;
			width: 1200px;
			height: 214px;
			background-image: url("../../public/image/aboutus_des.png");
			background-repeat: no-repeat;
			background-size: 100% 100%;
			padding: 26px 31px 34px;
			box-sizing: border-box;
			font-size: 14px;
			line-height: 29px;
		}
		.map {
			margin-top: 64px;
			img {
				width: 1200px;
				height: 480px;
			}
		}
		.address {
			margin-top: 38px;
			div {
				margin-bottom: 22px;
				font-size: 18px;
				line-height: 27px;
				color: #666666;
				img {
					width: 34px;
					height: 34px;
					vertical-align: middle;
					margin-right: 15px;
				}
			}
			
		}
  }
}
</style>