<template>
  <div class="gallary" v-show="showGallary" @click="hideGallary()">
    <swiper :options="swiperOption">
      <swiper-slide class="img-item" v-for="(item,index) in imgs" :key="index">
        <img :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "detailsGallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    },
    showGallary: Boolean
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      }
    };
  },
  methods: {
    hideGallary() {
      this.$emit("close");
    }
  }
};
</script>
<style scoped lang='scss'>
.gallary {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba($color: #000000, $alpha: 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  .img-item {
    width: 100%;
    height: 7rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-container {
    &.swiper-container {
      width: 100%;
      overflow: inherit;
    }
  }
  .swiper-pagination {
    font-size: 0.4rem;
    color: #fff;
    bottom: -1rem;
  }
}
</style>


