<template>
  <div class="searchContainer">
    <input class="searchContainer--searchBox"  @keyup.enter="searchProducts" v-model="item" type="search" name="search" placeholder="Nunca deixe de buscar" >
    <div class="searchContainer--autocomplete-items" v-show="hasItems">
      <div @click="getProduct(product)" v-for="(product, index) in items" :key="index">
          <div class="product">
            <img :src="product.picture" :alt="product.title" >
            <span>{{product.title}}</span>
            <div class="product--details">
              <span>{{product.location}}</span>
              <span>{{product.price}}</span>
            </div>
          </div>
      </div>
    </div>
    <button @click="searchProducts"  class="searchContainer--searchIcon">
      <img src="@/assets/images/ic_Search.png" srcset="@/assets/images/ic_Search@2x.png" alt="Icone de lupa. indica que voce pode buscar ao clicar nesse botão" width="20" height="20">
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      hasItems: false,
      items: [],
      item: ''
    };
  },
  watch: {
    item: function (oldItem, newItem)  {
      if (newItem.length < 6) {
        this.hasItems = false;
        return;
      }
      this.fetchProducts({query: this.item}).then(products => {
        this.items = products.filter((product, index) => index < 5);
        this.hasItems = true;
      });
    }
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchProductById", "fetchProductDescriptionById"]),
    autocomplete(e) {

    },
    getProduct(product) {
      this.fetchProductById(product.id)
        .then(({id}) => {
          return this.fetchProductDescriptionById(id)
        })
        .then(() => {
          this.hasItems = false;
          this.$router.push({name: 'DetailProduct', params: {id: product.id}})
        })
    },
    searchProducts(e) {
      const query = this.$slugfy(this.item)
      this.fetchProducts({query}).then(products => {
        this.hasItems = false;
        this.$router.push({name: 'ProductsSearch', params: {search:query}, query:{search:query} })
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/sass/_core.scss";
.searchContainer {
  position: relative;
  display: inline-flex;
  width: 50%;
  @media screen and (max-width: 500px) {
    width: 75%;
  }
  &--autocomplete-items {
    position: absolute;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-top: none;
    z-index: 99;
    top: 100%;
    left: 0;
    right: 0;
  }
  &--autocomplete-items div {
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid #d4d4d4;
    .product {
      display: inline-flex;
      img {
        width: 75px;
        height: 75px;
        border-radius: 3%;
      }
      &--details {
        display: flex;
        flex-direction: column;
      }
      &:hover {
        background-color: #e9e9e9;
      }
    }
  }

  &--searchIcon {
    background-color: $gray-100;
    border: none;
    padding {
      top: 14px;
      bottom: 1rem;
      right: 1rem;
      left: 1rem;
    }
  }
  &--searchBox {
    border: 0;
    padding: 0.5rem 0.5rem 0.5rem 0;
    flex: 1;
  }
}
</style>
