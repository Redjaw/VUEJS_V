import { createRouter, createWebHistory } from 'vue-router'

const userAge = 12

const routes = [{
    path: '/',
    component: () => import('@/components/Library.vue'),
    name: "library"
}, {
    path: '/:id',
    component: () => import('@/components/Book.vue'),
    name: "book",
    props: true,
    children: [
        {
        path: '',
        name: 'history',
        component: () => import('@/components/History.vue')
        },
        {
        path: 'comments',
        name: 'comments',
            component: () => import('@/components/Comments.vue'),
            meta: {
                minori: true
            }
        },
        {
            path: 'parental-control',
            name: 'parental-control',
            component: () => import('@/components/ParentalControl.vue'),
        }
    ]
}, ]

const router = createRouter({
    history: createWebHistory('/library/'),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.minori && userAge < 14) {
        next('parental-control')
    }else next()
}) 

export default router
