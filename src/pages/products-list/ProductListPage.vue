<template>
  <section class="product-list">
    <div>
      <ProductListItem  v-for="(product, index) in products" :key="index"  :product="product" @product-selected="goDetailProduct(product.id)"/>
    </div>
  </section>
</template>

<script>
import ProductListItem from './components/ProductListItem'
import * as TYPES from '@/store/mutations-type'
import {mapActions, mapState, mapMutations} from 'vuex'
export default {
  components: {
    ProductListItem
  },
  computed: {
    ...mapState([
      'products',
      'selectedProduct'
    ])
  },
  methods: {
    ...mapActions([
      'fetchProducts',
      'fetchProductById',
      'fetchProductDescriptionById'
    ]),
    goDetailProduct(productId) {
      this.fetchProductById(productId)
        .then(() => {
          this.$router.push({name: 'DetailProduct', params: {id: productId}})
        })
    }
  },
  mounted() {
    const query = this.$route.params.search
    if (query) {
      this.fetchProducts(query);
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.selectedProduct.id) {
      this.fetchProductDescriptionById(this.selectedProduct.id)
          .then(() => {
            next()
          })
    }
    next()
  }
}
</script>

<style lang="scss">
@import "assets/sass/_core.scss";
.product-list {
  background-color: $white !important;
  border-radius: 1%;
  display: flex;
}
</style>
