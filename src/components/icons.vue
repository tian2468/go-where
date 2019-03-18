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
  data() {
    return {
      swiperOption: {},
      iconList: [
        {
          id: 1,
          imgUrl: require("../assets/img/icon/1.png"),
          msg: "联系人"
        },
        {
          id: 2,
          imgUrl: require("../assets/img/icon/2.png"),
          msg: "coffee"
        },
        {
          id: 3,
          imgUrl: require("../assets/img/icon/3.png"),
          msg: "家电"
        },
        {
          id: 4,
          imgUrl: require("../assets/img/icon/4.png"),
          msg: "娱乐"
        },
        {
          id: 5,
          imgUrl: require("../assets/img/icon/5.png"),
          msg: "音乐"
        },
        {
          id: 6,
          imgUrl: require("../assets/img/icon/6.png"),
          msg: "问题"
        },
        {
          id: 7,
          imgUrl: require("../assets/img/icon/7.png"),
          msg: "时间"
        },
        {
          id: 8,
          imgUrl: require("../assets/img/icon/8.png"),
          msg: "宠物"
        },
        {
          id: 9,
          imgUrl: require("../assets/img/icon/8.png"),
          msg: "宠物"
        },
        {
          id: 10,
          imgUrl: require("../assets/img/icon/8.png"),
          msg: "宠物"
        },
        {
          id: 1,
          imgUrl: require("../assets/img/icon/1.png"),
          msg: "联系人"
        }
      ]
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


