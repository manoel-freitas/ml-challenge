import * as TYPES from './mutations-type'

export default {
  [TYPES.FETCH_PRODUCT] (state, product) {
    state.selectedProduct = product
  },
  [TYPES.FETCH_PRODUCTS] (state, productsFetched) {
    state.products = productsFetched
  },
  [TYPES.UNSELECT_PRODUCT] (state) {
    state.selectedProduct = {}
  },
  [TYPES.FECTCH_DESCRIPTION_PRODUCT] (state, description) {
    Object.assign(state.selectedProduct, {description})
  }
}
