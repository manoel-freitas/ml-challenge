<template>
  <section class="product-list" v-if="products.length !== 0">
    <div>
      <ProductListItem  v-for="(product, index) in products" :key="index"  :product="product" @product-selected="goDetailProduct(product.id)"/>
    </div>
  </section>
  <NoProductsInfo v-else/>
</template>

<script>
import ProductListItem from './components/ProductListItem'
import NoProductsInfo from './components/NoProductsInfo'
import * as TYPES from '@/store/mutations-type'
import {mapActions, mapState, mapMutations} from 'vuex'
import metaMixin from "../mixins/metaMixin";
export default {
  name: 'products-page',
  components: {
    ProductListItem,
    NoProductsInfo
  },
  props: {
    search: String
  },
  mixins: [metaMixin],
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
  beforeRouteLeave (to, from, next) {
    if (this.selectedProduct.id) {
      this.fetchProductDescriptionById(this.selectedProduct.id)
          .then(() => {
            next()
          })
    }
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
