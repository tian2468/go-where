export default {
  changeCity: function (state, city) {
    this.state.city = city
    // localStorage.city = city
    try {
      if (localStorage.city) {
        localStorage.city = city
      }
    } catch (e) {}
  }
}
