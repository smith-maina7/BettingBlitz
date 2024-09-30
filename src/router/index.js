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
      path: '/country/:sportId/:countryId',
      name: 'countries',
      component: () => import('../views/CountryView.vue')
    },
    {
      path: '/leagues/:sportId/:countryId/:leagueId',
      name: 'leagues',
      component: () => import('../views/DivisionsView.vue')
    },
    {
      path: '/match/:sportId/:countryId/:leagueId/:matchId',
      name: 'markets',
      component: () => import('../views/MarketsView.vue')
    }
  ]
})

export default router
