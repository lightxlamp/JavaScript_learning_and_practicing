import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue'
import JobView from '@/views/JobView.vue'
import AddJobView from '@/views/AddJobView.vue'
import EditJobView from '@/views/EditJobView.vue'
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
                path: '/jobs/:id',
                name: 'Job',
                component: JobView,
            },              
            {
                path: '/jobs/edit/:id',
                name: 'Edit Job',
                component: EditJobView,
            },            
            {
                path: '/jobs/add',
                name: 'Add Job',
                component: AddJobView,
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