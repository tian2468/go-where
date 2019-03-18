<template>
  <div class="home">
    <header-box></header-box>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import headerBox from "../components/header";
import homeSwiper from "../components/swiper";
export default {
  name: "home",
  components: {
    headerBox,
    homeSwiper
  }
};
</script>
