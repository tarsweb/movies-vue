import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      component : () => import ('../views/MoviesView.vue')
    },
    {
      path: '/movies/:moviesId',
      component : () => import ('../views/MoviesView.vue'),
      children: [
        {
          path: '/cast', //!!!!!!
          component : () => import('../views/AboutView.vue')
        },
        {
          path: '/reviews', //!!!!!!
          component : () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    // and finally the default route, when none of the above matches:
    { path: "/:pathMatch(.*)*", component: NotFoundView }
  ]
})

export default router
