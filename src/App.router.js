import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: ()=> import('@/components/List') },
  { path: '/:game', name:"game", component: () => import('@/components/Game'), props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router