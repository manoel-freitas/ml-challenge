<template>
  <section class="selected-product">
    <ProductInformation :product="selectedProduct" />
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import * as TYPES from "@/store/mutations-type";
import ProductInformation from "./components/ProductInformation";
export default {
  computed: {
    ...mapState(["selectedProduct"])
  },
  components: {
    ProductInformation
  },
};
</script>

<style lang="scss" scoped>
@import "assets/sass/_core.scss";
.selected-product {
  background-color: $white !important;
  border-radius: 1%;
  display: flex;
}
</style>
