import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Product from '../views/Product.vue'
import Checkout from '../views/Checkout.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import SinglePage from '../views/SinglePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/single-page',
    name: 'SinglePage',
    component: SinglePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
