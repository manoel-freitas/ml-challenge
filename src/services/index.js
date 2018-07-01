import axios from 'axios'
import { formatProductData } from './business'

const http = axios.create({
  baseURL: process.env.BASE_URL
})
const API_EP = {
  SEARCH: process.env.SEARCH_API,
  ID_ITEM: process.env.ID_ITEM
}

export const serchProducts = (query) => {
  return http.get(`${API_EP.SEARCH}${query}`)
    .then(response => response.data.results.map(productData => {
      return formatProductData(productData)
    }))
}

export const getProductById = (id) => {
  return http.get(`${API_EP.ID_ITEM}${id}`)
    .then(response => formatProductData(response.data))
}

export const getProductDescriptionById = (id) => {
  return http.get(`${API_EP.ID_ITEM}${id}/description`)
    .then(response => response.data.text ? response.data.text : response.data.plain_text)
}
