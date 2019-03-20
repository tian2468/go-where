<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script>
export default {
  name: "CityAiphabet"
};
</script>
<style scoped lang="scss">
@import "../../assets/style/varibles.scss";
.list {
  height: 100%;
  position: absolute;
  top: 0;
  right: 0.2rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  .item {
    font-size: 0.35rem;
    color: $bgColor;
    padding: 0.15rem 0;
  }
}
</style>
