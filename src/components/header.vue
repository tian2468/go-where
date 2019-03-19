<template>
  <div class="header-box">
    <div class="back">
      <p class="iconfont">&#xe63b;</p>
    </div>
    <div class="input">
      <p class="iconfont">&#xe61b;</p>
      <span>请输入城市/景点/游玩主题</span>
    </div>
    <div class="arrow">
      {{this.city}}
      <span class="iconfont">&#xe615;</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    city: String
  },
  data() {
    return {
    };
  }
};
</script>
<style scoped lang="scss">
@import "../assets/style/varibles.scss";
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
  z-index: 3;
  .back {
    width: 0.8rem;
    height: 100%;
    text-align: center;
    .iconfont {
      font-size: 0.5rem;
      color: #fff;
    }
  }
  .input {
    flex: 1;
    background: #fff;
    border-radius: 0.1rem;
    height: 0.6rem;
    line-height: 0.5rem;
    color: #999;
    display: flex;
    .iconfont {
      width: 0.6rem;
      height: 100%;
      font-size: 0.5rem;
      color: #ccc;
    }
    span {
      flex: 1;
      line-height: 0.6rem;
      font-size: 0.29rem;
    }
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

