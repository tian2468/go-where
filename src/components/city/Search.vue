<template>
  <div class="search">
    <input class="search-con" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name: "CitySearch"
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
</style>


