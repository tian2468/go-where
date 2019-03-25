<template>
  <div>
    <details-banner></details-banner>
    <details-header></details-header>
    <div style="height:50rem;"></div>
  </div>
</template>
<script>
import DetailsBanner from "../components/details/Banner";
import DetailsHeader from "../components/details/header";
export default {
  name: "Details",
  components: {
    DetailsBanner,
    DetailsHeader
  }
};
</script>

<style scoped lang="scss">
</style>

