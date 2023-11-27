import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import Tickets from '../views/Tickets.vue'
import Galery from '../views/Galerie.vue'
// import Contact from '../views/Contact.vue'
import Impressum from '../views/Impressum.vue'



// Sets routes for URLS and their paths
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  },
  {
    path: '/galerie',
    name: 'Galerie',
    component: Galery
  },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact
  // },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'Login', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
