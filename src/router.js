import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Views/Home.vue'
import Register from './components/Views/Auth/Register.vue'

import Blog from './components/Views/Posts.vue'
import BlogPost from './components/Views/Post.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
    },
    {
        path: '/blog/:slug',
        component: BlogPost
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router