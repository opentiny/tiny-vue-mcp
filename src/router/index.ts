import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/product' //综合示例
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/productManager/index.vue')
    }
  ]
})

export default router
