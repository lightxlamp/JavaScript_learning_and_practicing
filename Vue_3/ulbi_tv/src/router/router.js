import Main from "@/pages/Main"
import PostsPage from "@/pages/PostsPage"
import PostPage from "@/pages/PostPage"
import PostsPageStore from "@/pages/PostsPageStore"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    },    
    {
        path: '/posts',
        component: PostsPage
    },    
    {
        path: '/posts/:id',
        component: PostPage
    },
    {
        path: '/posts_v2',
        component: PostsPageStore
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router