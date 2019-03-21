<template>
  <ul class="list">
    <li class="item" v-for="(item,index) in citys" :key="index">{{index}}</li>
  </ul>
</template>
<script>
export default {
  name: "CityAiphabet",
  props: {
    citys: Object
  }
};
</script>
<style scoped lang="scss">
@import "../../assets/style/varibles.scss";
.list {
  position: absolute;
  top: 1.89rem;
  right: 0.2rem;
  bottom: 0;
  flex: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  .item {
    font-size: 0.3rem;
    color: $bgColor;
    padding: 0.08rem 0;
  }
}
</style>
