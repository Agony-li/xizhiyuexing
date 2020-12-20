import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/views/index'], resolve)
const Product = resolve => require(['@/views/product'], resolve)
const Brand = resolve => require(['@/views/brand'], resolve)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand
    }
  ]
})

export default router;