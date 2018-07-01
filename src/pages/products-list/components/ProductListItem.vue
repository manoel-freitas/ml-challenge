<template>
  <div class="product-list-item" @click="$emit('product-selected', product)">
    <img :src="product.picture" class="product--image" alt="img">
    <div class="product-list-item--product-information">
      <span class="product--price"> ${{product.price}}  <img src="@/assets/images/ic_shipping.png" class="product--shipping" srcset="@/assets/images/ic_shipping@2x.png" v-if="hasShipping" alt=""></span>
      <span class="product--description"> {{product.title}}</span>
    </div>
    <span class="product--location">
      {{product.location}}
    </span>
  </div>
</template>

<script>
import productMixin from "../../mixins/productMixin.js";
export default {
  mixins: [productMixin],
  computed: {
    hasShipping () {
      return this.product.free_shipping
    }
  },
  props: {
    product: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss">
@import "assets/sass/_core.scss";
.product-list-item {
  display: flex;
  margin: {
    top: 16px;
    bottom: 16px;
  };
  justify-content: space-between;
  align-items: center;

  &:hover {
    opacity: .7 ;
    cursor: pointer;
  }
  &--product-information {
    display: flex;
    color: $black;
    flex-direction: column;

    margin: {
      left: 5%;
    }
  }
  @media screen and (max-width: 500px) {
   flex-direction: column;
   &--product-information {
    align-items: center;
   }
  }
}

.product {
  &--price {
    padding: {
      bottom: 32px;
    }
  }
  &--shipping {
    border-radius: 50%;
    height: 10;
    width: 10;
  }
  &--image {

    border: 1px solid #ddd;
    border-radius: 4px;
    height: 180px;
    width: 300px;
    margin: 16px;
  }
  &--location {
    margin: 10%;
  }
}

</style>
