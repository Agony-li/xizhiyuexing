import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/views/index'], resolve)
const Product = resolve => require(['@/views/product'], resolve)
const Brand = resolve => require(['@/views/brand'], resolve)
const Aboutus = resolve => require(['@/views/aboutus'], resolve)

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
      name: 'product',
      component: Product
    },
    {
      path: '/brand',
      name: 'brand',
      component: Brand
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: Aboutus
    }
  ]
})

export default router;