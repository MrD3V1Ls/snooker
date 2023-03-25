import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home Page',
    component: () =>
        import( /* webpackChunkName: "about" */ '../pages/HomePage.vue')
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;