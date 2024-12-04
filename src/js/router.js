import { createWebHistory, createRouter } from 'vue-router'

import AppAbout from '../pages/AppAbout.vue'
import AppHomepage from '../pages/AppHomepage.vue'

const routes = [
    { path: '/', component: AppHomepage, name: 'homepage' },
    { path: '/about', component: AppAbout, name: 'about' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router };