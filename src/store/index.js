import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import * as actions from './actions'
import * as TYPES from './mutations-type'
import mutations from './mutations'
import state from './state'

const badMutations = [
  TYPES.FETCH_PRODUCTS
]

const vuexLocalStorage = new VuexPersist({
  key: 'ml-state',
  storage: window.localStorage,
  reducer: state => ({
    selectedProduct: state.selectedProduct
  }),
  filter: mutation => (badMutations.indexOf(mutation.type) === -1)
})

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  mutations,
  state,
  plugins: [vuexLocalStorage.plugin]
})
