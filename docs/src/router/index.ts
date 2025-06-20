import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/comprehensive' //综合示例
    },
    {
      path: '/grid',
      name: 'Grid',
      component: () => import('../views/grid/grid.vue')
    },
    {
      path: '/comprehensive',
      name: 'Comprehensive',
      component: () => import('../views/comprehensive/index.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('../views/form/form-validate.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404/NotFound.vue')
    }
  ]
})

export default router
