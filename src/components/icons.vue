<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,indexP) in pages" :key="indexP">
        <div class="icon-item" v-for="(item,index) in page" :key="index" :id="item.id">
          <img :src="item.imgUrl" alt>
          <p>{{item.msg}}</p>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOption: {}
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style scoped lang="scss">
@import "../assets/style/mixin.scss";
.icons {
  width: 100%;
  height: 3.5rem;
  padding: 0.1rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  .icon-item {
    width: 25%;
    height: 46%;
    text-align: center;
    border-radius: 0.1rem;
    box-shadow: 0 2px 5px rgba(0, 76, 92, 0.4);
    margin-bottom: 0.1rem;
    img {
      width: 1rem;
    }
    p {
      width: 80%;
      font-size: 0.28rem;
      margin: 0 auto;
      @include ellips;
    }
  }
}
</style>


