<template>
  <div class="">
    <div class="product-information">
      <img :src="product.picture" :alt="`Imagem do produto ${product.description}`" class="product-information--image">
      <div class="product-information--details">
        <h4 class="product-information--details---condition">{{condition}}</h4>
        <h3 class="product-information--details---title">{{product.title}}</h3>
        <h2 class="product-information--details---price"> {{product.price}}</h2>
        <button>Comprar</button>
      </div>
    </div>
    <div class="product-description">
      <h2>Descrição do produto</h2>
      <p>{{product.description}}</p>
    </div>
  </div>
</template>

<script>
import productMixin from "../../mixins/productMixin.js";
export default {
  mixins: [productMixin],
  props: {
    product: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/sass/_core.scss";
.product-information {
  display: flex;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
  &--image {
    width: 100%;
  }
  &--details {
    color: $black;
    display: flex;
    width: 40%;
    height: 100%;
    margin-left: 5%;
    padding-right: 2rem;
    flex-direction: column;
    text-align: justify;
    @media screen and (max-width: 500px) {
      width: 100%;
      margin-left: 0;
      align-items: center;
      padding-right: 0;
    }
    &---condition {
      padding-top: 1rem;
      font-size: 0.875rem;
    }
    &---title {
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 20px;
    }
    &---price {
      font-weight: 500;
    }
    button {
      background-color: $secondary;
      text-align: center;
      border: none;
      padding: 8px;
      color: $white;
      border-radius: 5%;
      width: 85%;
    }
  }
}
.product-description {
  width: 100%;
  h2 {
    color: $black;
  }
  p {
    line-height: 20px;
    letter-spacing: 1px;
    font-weight: 500;
    text-justify: distribute-all-lines;
  }
}
</style>
