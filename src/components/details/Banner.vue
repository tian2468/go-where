<template>
  <div>
    <div class="banner">
      <img
        class="banner-img"
        src="http://book.tzzown.com/mockimg/banner1.jpg"
        alt
        @click="showGallarys()"
      >
      <div class="banner-info">
        <p class="info-title">海洋（AAAA景区）</p>
        <p class="info-number">
          <span class="iconfont icon-tupian"></span> 12
        </p>
      </div>
    </div>
    <banner-gallary :imgs="imgs" :showGallary="showGallary" @close="hideGallary()"></banner-gallary>
  </div>
</template>
<script>
import BannerGallary from "../../components/details/gallary/gallary";
export default {
  name: "Details",
  components: {
    BannerGallary
  },
  data() {
    return {
      imgs: [
        "http://book.tzzown.com/mockimg/banner2.png",
        "http://book.tzzown.com/mockimg/banner3.jpg"
      ],
      showGallary: false
    };
  },
  methods: {
    showGallarys() {
      this.showGallary = true;
    },
    hideGallary() {
      this.showGallary = false;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/style/mixin.scss";
.banner {
  overflow: hidden;
  height: 0;
  height: 4rem;
  position: relative;
  .banner-img {
    width: 100%;
    height: 100%;
  }
  .banner-info {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 0.35rem;
    width: 100%;
    background: rgba($color: #000000, $alpha: 0.4);
    color: #fff;
    display: flex;
    padding: 0.2rem;
    .info-title {
      flex: 1;
      @include ellips;
    }
    .info-number {
      width: 1.5rem;
      @include ellips;
      text-align: center;
    }
  }
}
</style>

