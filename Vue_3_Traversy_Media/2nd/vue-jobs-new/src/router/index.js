import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import Page404View from '@/views/Page404View.vue'

const router = createRouter(
    {
        history: createWebHistory(import.meta.env.BASE_URL), 
        routes: [
            {
                path: '/',
                name: 'home',
                component: HomeView,
            },             
            {
                path: '/jobs',
                name: 'Jobs',
                component: JobsView,
            }, 
            {
                path: '/:catchAll(.*)',
                name: 'not-found',
                component: Page404View,
            },
        ]
    }
)

export default router;