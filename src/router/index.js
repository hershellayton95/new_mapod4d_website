import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../components/views/Project.vue')
    },
    {
      path: '/outintheworld',
      name: 'outintheworld',
      component: () => import('../components/views/Outintheworld.vue')
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: () => import('../components/views/Showcase.vue')
    },
    {
      path: '/multiverse',
      name: 'multiverse',
      component: () => import('../components/views/Multiverse.vue')
    },
    {
      path: '/governance',
      name: 'governance',
      component: () => import('../components/views/Governance.vue')
    }
  ]
})

export default router
