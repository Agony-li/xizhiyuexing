import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/views/index'], resolve)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
  ]
})

export default router;