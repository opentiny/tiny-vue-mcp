import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/grid'
    },
    {
      path: '/grid',
      name: 'Grid',
      component: () => import('../views/grid/grid.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/404/NotFound.vue')
    }
  ]
})

export default router
