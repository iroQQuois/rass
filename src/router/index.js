import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'main',
            meta: { layout: 'main' },
            component: () => import('../views/Main.vue')
        },
        {
            path: '/signin',
            name: 'signin',
            meta: { layout: 'main' },
            component: () => import('../views/SignIn.vue')
        },
        {
            path: '/customerlist',
            name: 'customer-list',
            meta: { layout: 'main' },
            component: () => import('../views/CustomerList.vue')
        },
    ]
})

export default router