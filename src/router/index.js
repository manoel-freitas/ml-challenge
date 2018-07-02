import Vue from 'vue'
import Router from 'vue-router'

const ProductsListPage = (resolve) => require(['../pages/products-list/ProductListPage.vue'], resolve)

const Home = (resolve) => require(['../pages/Home.vue'], resolve)

const SelectedProductPage = (resolve) => require(['../pages/selected-product/SelectedProductPage.vue'], resolve)

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
      path: '/items',
      name: 'ProductsSearch',
      component: ProductsListPage,
      props: true
    },
    {
      path: '/items/:id',
      name: 'DetailProduct',
      component: SelectedProductPage
    }
  ]
})
