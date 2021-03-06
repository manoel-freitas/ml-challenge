import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import * as actions from './actions'
import mutations from './mutations'
import state from './state'

const vuexLocalStorage = new VuexPersist({
  key: 'ml-state',
  storage: window.localStorage,
  reducer: state => ({
    selectedProduct: state.selectedProduct,
    products: state.products
  })
})

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  state,
  plugins: [vuexLocalStorage.plugin]
})
