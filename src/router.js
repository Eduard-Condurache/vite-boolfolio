import { createRouter, createWebHistory } from 'vue-router';
    // createWebHistory = simula una cronologia di navigazione.
import HomePage from './pages/HomePage.vue';
import ProductsPage from './pages/ProjectsPage.vue';
import AboutPage from './pages/AboutPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/progetti',
            name: 'projects',
            component: ProductsPage
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }
    ]
});

export { router };