<template>
  <div class="home">
    <header-box :city="city"></header-box>
    <home-swiper :bannerList="bannerList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :reList="reList"></home-recommend>
    <home-weeken :itemList="itemList"></home-weeken>
  </div>
</template>

<script>
// @ is an alias to /src
import headerBox from "../components/header";
import homeSwiper from "../components/swiper";
import HomeIcons from "../components/icons";
import HomeRecommend from "../components/recommend";
import HomeWeeken from "../components/weeken";
import axios from "axios";
export default {
  name: "home",
  components: {
    headerBox,
    homeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeeken
  },
  data() {
    return {
      city: "",
      bannerList: [],
      iconList: [],
      reList: [],
      itemList: []
    };
  },
  methods: {
    getHomeInfo() {
      axios
        .get("api/index.json")
        .then(res => {
          // console.log(res);
          // let res = res.data;
          let data = res.data;
          this.city = data.city;
          this.bannerList = data.bannerList;
          this.iconList = data.iconList;
          this.reList = data.reList;
          this.itemList = data.itemList;
          console.log(this.itemList);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getHomeInfo();
  }
};
</script>
