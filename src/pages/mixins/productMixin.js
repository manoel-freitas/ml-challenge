export default {
  computed: {
    condition () {
      let condition = ''
      if (this.product.condition === 'new') {
        condition = this.$capitalize('novo')
      } else if (condition === 'used') {
        condition = this.$capitalize('usado')
      }
      return `${condition} -  ${this.product.sold_quantity} vendidos`
    }
  }
}
