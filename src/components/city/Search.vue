<template>
  <div>
    <div class="search">
      <input class="search-con" type="text" placeholder="请输入城市名或拼音" v-model="keyWorld">
    </div>
    <div class="search-content" ref="wrapper" v-show="isA">
      <ul>
        <li class="item" v-for="(item,index) in list" :key="index">{{item.name}}</li>
        <li class="item tips" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    citys: Object
  },
  data() {
    return {
      keyWorld: "",
      list: [],
      timer: null,
      isA: false
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  watch: {
    keyWorld() {
      const result = [];
      this.isA = true;
      if (this.keyWorld == "") {
        this.list = [];
        this.isA = false;
      } else {
        for (let i in this.citys) {
          this.citys[i].forEach(value => {
            // console.log(value.spell, value.name);
            if (
              value.spell.indexOf(this.keyWorld) > -1 ||
              value.name.indexOf(this.keyWorld) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }
    }
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/style/varibles.scss";
.search {
  width: 100%;
  background: $bgColor;
  padding: 0.2rem 0;
  text-align: center;
  .search-con {
    width: 95%;
    height: 0.62rem;
    border-radius: 0.1rem;
    border: none;
    outline: none;
    text-align: center;
    font-size: 0.35rem;
    display: block;
    margin: 0 auto;
    color: #666;
    box-sizing: border-box;
    padding: 0.1rem;
  }
}
.search-content {
  position: absolute;
  top: 1.89rem;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  font-size: 0.35rem;
  background: #eee;
  overflow: hidden;
  .item {
    text-indent: 1em;
    padding: 0.2rem 0;
    color: #666;
    background: #fff;
    border-bottom: 1px solid #999;
    &.tips {
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>


