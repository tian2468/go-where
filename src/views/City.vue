<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-Aiphabet></city-Aiphabet>
  </div>
</template>
<script>
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
  }
};
</script>
<style scoped lang="scss">
</style>


