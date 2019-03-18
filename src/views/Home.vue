<template>
  <div class="home">
    <header-box></header-box>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
// @ is an alias to /src
import headerBox from "../components/header";
import homeSwiper from "../components/swiper";
import HomeIcons from "../components/icons";
export default {
  name: "home",
  components: {
    headerBox,
    homeSwiper,
    HomeIcons
  }
};
</script>
