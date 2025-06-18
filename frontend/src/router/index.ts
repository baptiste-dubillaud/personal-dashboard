import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Lazy load components for better performance
const Home = () => import('@/views/Home.vue')
const Health = () => import('@/views/Health.vue')
const Calendar = () => import('@/views/Calendar.vue')
const Finance = () => import('@/views/Finance.vue')
const Settings = () => import('@/views/Settings.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home',
      icon: 'fas fa-home'
    }
  },
  {
    path: '/health',
    name: 'Health',
    component: Health,
    meta: {
      title: 'Health Tracker',
      icon: 'fas fa-heartbeat'
    }
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    meta: {
      title: 'Calendar',
      icon: 'fas fa-calendar-alt'
    }
  },
  {
    path: '/finance',
    name: 'Finance',
    component: Finance,
    meta: {
      title: 'Finance',
      icon: 'fas fa-wallet'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      title: 'Settings',
      icon: 'fas fa-cog'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Update document title on route change
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} - PersonalHub`
  } else {
    document.title = 'PersonalHub - Your Personal Dashboard'
  }
  next()
})

export default router
