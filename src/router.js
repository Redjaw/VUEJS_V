import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "list",
        component: () => require('@/components/List.vue'),
        children: [{
            path: "new-match",
            name: "new-match",
            component: () => require('@/components/NewMatch.vue')
            },{
            path: ":id",
            name: "match",
            component: () => require('@/components/Match.vue'),
            props: true
        }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router