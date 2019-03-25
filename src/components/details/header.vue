<template>
  <div class="wrapper">
    <div class="header-abs" @click="back" v-show="!showAbs">
      <p class="iconfont icon-fanhui"></p>
    </div>
    <div class="header-box" v-show="showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="back">
          <p class="iconfont">&#xe63b;</p>
        </div>
      </router-link>
      <div class="title">详情信息</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Details",
  components: {},
  data() {
    return {
      showAbs: false,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    handleScroll() {
      let scrollTop = document.body.scrollTop;
      if (scrollTop > 60) {
        this.showAbs = true;
        let opacity = scrollTop / 100;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
      } else {
        this.showAbs = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/style/mixin.scss";
@import "../../assets/style/varibles.scss";
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  height: 0.8rem;
  width: 0.8rem;
  background: rgba($color: #000000, $alpha: 0.7);
  border-radius: 50%;
  color: #fff;
  font-size: 0.5rem;
  text-align: center;
  line-height: 0.8rem;
  .iconfont {
    font-size: 0.5rem;
  }
}
.header-box {
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  background: $bgColor;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  :after {
    content: "";
    display: block;
    width: 0.8rem;
    height: 100%;
  }
  .back {
    width: 0.8rem;
    height: 100%;
    text-align: center;
    .iconfont {
      font-size: 0.5rem;
      color: #fff;
    }
  }
  .title {
    flex: 1;
    height: 0.86rem;
    // line-height: 0.5rem;
    color: #fff;
    display: flex;
    font-size: 0.35rem;
    justify-content: center;
  }
  .arrow {
    width: 1.5rem;
    height: 100%;
    font-size: 0.3rem;
    text-align: center;
    color: #fff;
    .iconfont {
      font-size: 0.25rem;
    }
  }
}
</style>

