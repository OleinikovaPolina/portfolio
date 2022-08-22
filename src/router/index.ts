import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { nextTick } from 'vue'
import i18n from '@/i18n'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    meta: {
      title: 'projects'
    },
    component: () => import('../views/ProjectsView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    meta: {
      title: 'contacts'
    },
    component: () => import('../views/ContactsView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

const default_title = 'Portfolio'
const default_favicon = './favicon.ico'
const back_favicon = './hi.png'
const favicon = document.querySelector('link[rel=icon]') as HTMLLinkElement
let pageTitle = document.title

router.afterEach((to) => {
  const title = <string>to.meta.title
  nextTick(() => {
    pageTitle = title ? i18n.global.t(default_title) + ' | ' + i18n.global.t(title) : i18n.global.t(default_title)
    document.title = pageTitle
  }).then()
})

document.addEventListener('visibilitychange', () => {
  document.title = document.hidden ? 'come back' : pageTitle
  favicon.href = document.hidden ? back_favicon : default_favicon
})

export default router
