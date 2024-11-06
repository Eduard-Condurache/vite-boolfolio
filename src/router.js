import { createRouter, createWebHistory } from 'vue-router';
    // createWebHistory = simula una cronologia di navigazione.
import HomePage from './pages/HomePage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import AboutPage from './pages/AboutPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/prodotti',
            name: 'products',
            component: ProductsPage
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        }
    ]
});

export { router };