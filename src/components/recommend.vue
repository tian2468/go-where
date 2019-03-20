<template>
  <div>
    <h3 class="title">热门推荐</h3>
    <ul class="recommend-box">
      <li class="recommend-item" v-for="(item,index) in reList" :key="index" :id="item.id">
        <img class="recommend-item-img" :src="item.titleImg" alt>
        <div class="recommend-con">
          <p class="recommend-con-title">{{item.title}}</p>
          <p class="recommend-con-c">{{item.content}}</p>
          <div class="recommend-con-price">
            <a>￥</a>
            <strong>{{item.price}}</strong>
            <span>起</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "homeRescommend",
  props: {
    reList: Array
  },
  data() {
    return {
      msg: ""
    };
  },
  methods: {},
  mounted() {
    // this.axios
    //   .get("http://t.weather.sojson.com/api/weather/city/101030100")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {});
  }
};
</script>
<style scoped lang="scss">
@import "../assets/style/mixin.scss";
.title {
  @include obj-title;
}
.recommend-box {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  .recommend-item {
    flex: 1;
    height: 1.6rem;
    padding: 0.2rem 0.1rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    .recommend-item-img {
      width: 1.6rem;
      height: 1.6rem;
    }
    .recommend-con {
      flex: 1;
      margin-left: 0.2rem;
      height: 100%;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      .recommend-con-title {
        font-size: 0.4rem;
        font-weight: bold;
        @include ellips;
      }
      .recommend-con-c {
        font-size: 0.35rem;
        @include ellips;
      }
      .recommend-con-price {
        color: orange;
        font-size: 0.3rem;
        strong {
          font-size: 0.4rem;
          font-weight: bold;
          margin: 0 0.05rem;
        }
      }
    }
  }
}
</style>


