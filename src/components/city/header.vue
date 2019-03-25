<template>
  <div class="header-box">
    <router-link to="/">
      <div class="back">
        <p class="iconfont">&#xe63b;</p>
      </div>
    </router-link>
    <div class="title">城市选择</div>
  </div>
</template>
<script>
export default {
  props: {
    // city: String
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/style/varibles.scss";
.header-box {
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  background: $bgColor;
  display: flex;
  justify-content: center;
  align-items: center;
  // position: fixed;
  // top: 0;
  // left: 0;
  // z-index: 3;
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

