<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>
<script>
import CityHeader from "../components/city/header";
import CitySearch from "../components/city/Search";
export default {
  name: "City",
  components: {
    CityHeader,
    CitySearch
  }
};
</script>
<style scoped lang="scss">
</style>


