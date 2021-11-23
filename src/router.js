import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Views/Home.vue'

import Register from './components/Views/Auth/Register.vue'
import Login from './components/Views/Auth/Login.vue';

import Blog from './components/Views/Posts.vue'
import BlogPost from './components/Views/Post.vue'

import AdminDashboard from './components/Views/Admin/Dashboard.vue'

function getCookie() {
    return document.cookie.match(/^(.*;)?\s*corgi-session\s*=\s*[^;]+(.*)?$/) ? true : false;
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog,
    },
    {
        path: '/blog/:slug',
        component: BlogPost,
    },
    {
        path: '/admin',
        name: 'AdminDashboard',
        component: AdminDashboard,
        beforeEnter: (to, from) => {
            if (getCookie()) {
                return true
            } else {
                return false;
            }
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router