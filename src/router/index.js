import Vue from 'vue'
import Router from 'vue-router'

const ProductsListPage = () => import('../pages/products-list/ProductListPage.vue')

const Home = () => import('../pages/Home.vue')

const SelectedProductPage = () => import('../pages/selected-product/SelectedProductPage.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Products',
      component: Home
    },
    {
      path: '/items?search=:query',
      name: 'ProductsSearch',
      component: ProductsListPage
    },
    {
      path: '/items/:id',
      name: 'DetailProduct',
      component: SelectedProductPage
    }
  ]
})
