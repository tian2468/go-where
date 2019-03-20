<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperLength">
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
  props: {
    bannerList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
  },
  computed: {
    swiperLength() {
      return this.bannerList.length;
    }
  }
};
</script>
<style scoped lang="scss">
.wrapper {
  margin-top: 0.86rem;
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

 