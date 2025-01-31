import { createRouter, createWebHostory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

const router = createRouter(
    {
        history: createWebHostory(import.meta.env.BASE_URL), 
        routes: [
            {
                path: '/',
                name: 'home',
                component: HomeView
            }, 

        ]
    }
)

export default router;