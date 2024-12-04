import { createWebHistory, createRouter } from 'vue-router'

import AppAbout from '../pages/AppAbout.vue'
import AppHomepage from '../pages/AppHomepage.vue'
import AppProperty from '../pages/AppProperty.vue'

const routes = [
    { path: '/', component: AppHomepage, name: 'homepage' },
    { path: '/about', component: AppAbout, name: 'about' },
    { path: '/properties', component: AppProperty, name: 'properties' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router };