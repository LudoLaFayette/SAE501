import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WatchView from '../views/WatchView.vue'
import ProfilView from '../views/ProfilView.vue'
import PanierView from '../views/PanierView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/customisation',
      name : 'customisation',
      component : WatchView,
    },
    {
      path: '/profil',
      name : 'profil',
      component : ProfilView,
    },
    {
      path: '/panier',
      name : 'panier',
      component : PanierView,
    },
  ]
})

export default router
