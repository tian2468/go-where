<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item,index) in bannerList" :key="index" :id="item.id">
        <img :src="item.imgUrl" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "homeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      bannerList: [
        {
          id: "001",
          imgUrl: require("../assets/img/banner1.jpg")
        },
        {
          id: "002",
          imgUrl: require("../assets/img/banner2.png")
        },
        {
          id: "003",
          imgUrl: require("../assets/img/banner3.jpg")
        }
      ]
    };
  }
};
</script>
<style scoped lang="scss">
@import "../assets/style/mixin.scss";
.wrapper {
  width: 100%;
  height: 3rem;
  .swiper-slide {
    width: 100%;
    height: 3rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

 