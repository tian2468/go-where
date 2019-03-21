<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list clearfix">
          <div class="button-wraper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list clearfix">
          <div
            class="button-wraper"
            v-for="(item,index) in hotCity"
            :key="index"
            :id="item.id"
            :spall="item.spell"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(citys,indexC) in citys" :key="indexC" :ref="indexC">
        <div class="title border-topbottom">{{indexC}}</div>
        <ul class="item-list">
          <li
            class="item border-topbottom"
            v-for="(itemCity,indexItem) in citys"
            :key="indexItem"
            :id="itemCity.id"
            :spell="itemCity.spell"
          >{{itemCity.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hotCity: Array,
    citys: Object,
    letter: String
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        const ele = this.$refs[this.letter][0];
        this.scroll.scrollToElement(ele);
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/style/varibles.scss";
.border-topbottom {
  border-bottom: 1px solid #ccc;
}
.list {
  position: absolute;
  top: 1.89rem;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  .title {
    line-height: 0.4rem;
    background: #eee;
    font-size: 0.4rem;
    color: #666;
    padding: 0.2rem 0.4rem;
  }
  .button-list {
    padding: 0.2rem 0.8rem 0.2rem 0.4rem;
    justify-content: space-between;
    .button-wraper {
      width: 33.33%;
      float: left;
      font-size: 0.35rem;
      text-align: center;
      .button {
        padding: 0.15rem;
        margin: 0.1rem;
        border: 1px solid $bgColor;
        border-radius: 0.1rem;
        color: $bgColor;
      }
    }
  }
  .item-list {
    .item {
      padding: 0.1rem 0.4rem;
      color: #666;
      height: 0.56rem;
      line-height: 0.56rem;
      font-size: 0.35rem;
    }
  }
}
</style>


