import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sports',
      name: 'sports',
      component: () => import('../views/SportsView.vue')
    },
    {
      path: '/sport/:id',
      name: 'sport',
      component: () => import('../views/SportView.vue')
    },
    {
      path: '/league/:sportId/:countryId',
      name: 'league',
      component: () => import('../views/LeagueView.vue')
    }
  ]
})

export default router
