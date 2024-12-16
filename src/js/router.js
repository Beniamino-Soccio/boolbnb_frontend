import { createWebHistory, createRouter } from 'vue-router'

import AppAbout from '../pages/AppAbout.vue'
import AppHomepage from '../pages/AppHomepage.vue'
import AppProperties from '../pages/AppProperties.vue'
import AppSingleProperty from '../pages/AppSingleProperty.vue'
import AppFilteredProperties from '../pages/AppFilteredProperties.vue'

const routes = [
    { path: '/', component: AppHomepage, name: 'homepage' },
    { path: '/about', component: AppAbout, name: 'about' },
    { path: '/properties', component: AppProperties, name: 'properties' },
    { path: '/filtered-properties/:slug', component: AppFilteredProperties, name: 'filtered-properties', params: true },
    { path: '/properties/:id/:title', component: AppSingleProperty, name: "properties.show", params: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export { router };