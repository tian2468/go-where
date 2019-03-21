<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCity="hotCity" :citys="citys"></city-list>
    <city-Aiphabet :citys="citys"></city-Aiphabet>
  </div>
</template>
<script>
import axios from "axios";
import CityHeader from "../components/city/header";
import CitySearch from "../components/city/Search";
import CityList from "../components/city/List";
import CityAiphabet from "../components/city/AIphabet";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAiphabet
  },
  data() {
    return {
      hotCity: [],
      citys: {}
    };
  },
  methods: {
    city() {
      this.axios
        .get("/api/city.json")
        .then(res => {
          const data = res.data.data;
          this.hotCity = data.hotCities;
          this.citys = data.cities;
          console.log(this.citys);
        })
        .catch(() => {});
    }
  },
  mounted() {
    this.city();
  }
};
</script>
<style scoped lang="scss">
</style>


