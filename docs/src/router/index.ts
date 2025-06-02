import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/base-config'
    },
    {
      path: '/base-config',
      name: 'BaseConfig',
      component: () => import('../views/BaseConfig.vue')
    },
    {
      path: '/net-config',
      name: 'NetConfig',
      component: () => import('../views/NetConfig.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
