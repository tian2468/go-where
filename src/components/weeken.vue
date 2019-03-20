<template>
  <div>
    <h3 class="title">周末去哪</h3>
    <ul class="week-bok">
      <li class="item" v-for="(item,index) in itemList" :key="index">
        <img :src="item.imgUrl" alt>
        <p class="item-title">{{item.title}}</p>
        <p class="con">{{item.con}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "homeWeeken",
  props: {
    itemList: Array
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
@import "../assets/style/mixin.scss";
.title {
  margin-top: 0.2rem;
  @include obj-title;
}
.week-bok {
  display: flex;
  flex-flow: column nowrap;
  .item {
    flex: 1;
    height: 4.5rem;
    img {
      width: 100%;
      height: 3rem;
    }
    .item-title {
      font-size: 0.4rem;
      font-weight: bold;
      text-indent: 0.5em;
      @include ellips;
      margin: 0.15rem 0;
    }
    .con {
      font-size: 0.35rem;
      color: #666;
      text-indent: 0.5em;
      @include ellips;
    }
  }
}
</style>


