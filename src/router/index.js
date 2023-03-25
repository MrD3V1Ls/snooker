import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',
    component: () =>
        import( /* webpackChunkName: "about" */ '../pages/HomePage.vue')
},
{
    path: '/pay',
    name: 'Payment',
    component: () =>
        import( /* webpackChunkName: "about" */ '../pages/PaymentPage.vue')
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;