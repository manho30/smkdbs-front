/**
 * @Description : Project router
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 20/2/2023 11:52
 * @File        : router.js
 * @IDE         : WebStorm
 */
import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect : '/index'
    },
    {
        path: '/index',
        name: 'Home',
        component: () => import('./views/IndexPage.vue')
    },
    {
        path: '/announcement',
        name: 'Announcement',
        component: () => import('./views/AnnouncementPage.vue')
    },
    {
        path: '/announcement?id=:id',
        props: true,
        component: () => import('./views/AnnouncementPage.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Not Found',
        component: () => import('./views/NotFoundPage.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router