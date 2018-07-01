import * as TYPES from './mutations-type'
import {
  serchProducts,
  getProductById,
  getProductDescriptionById
} from '../services'

export const fetchProducts = ({
  commit
}, {
  query
}) => {
  return serchProducts(`${query}&limit=10`)
    .then(data => {
      commit(TYPES.FETCH_PRODUCTS, data)
      return Promise.resolve(data)
    })
}

export const fetchProductById = ({commit}, id) => {
  return getProductById(id)
    .then(data => {
      commit(TYPES.FETCH_PRODUCT, data)
      return Promise.resolve(data)
    })
}

export const fetchProductDescriptionById = ({commit}, id) => {
  return getProductDescriptionById(id)
    .then(data => {
      commit(TYPES.FECTCH_DESCRIPTION_PRODUCT, data)
      return Promise.resolve(data)
    })
}
