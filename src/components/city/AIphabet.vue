<template>
  <ul class="list">
    <li
      class="item"
      v-for="(item,index) in letters"
      :key="index"
      @click="handClick($event)"
      @touchstart="handTouchStart"
      @touchmove="handTouchMove($event)"
      @touchend="handTouchEnd"
      :ref="item"
    >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: "CityAiphabet",
  props: {
    citys: Object
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.citys) {
        letters.push(i);
        // console.log(letters);
      }
      return letters;
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handClick(e) {
      // const startY = this.$refs["A"][0].offsetTop;
      console.log(e);
      this.$emit("change", e.target.innerHTML);
    },
    handTouchStart() {
      this.touchStatus = true;
    },
    handTouchMove(e) {
      if (this.touchStatus) {
        const touchT = e.touches[0].clientY - 39;
        const index = Math.floor((touchT - this.startY) / 21.5 - 3);
        if (index >= 0 && index < this.letters.length) {
          this.$emit("change", this.letters[index]);
        }
      }
    },
    handTouchEnd() {
      this.touchStatus = false;
    }
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
