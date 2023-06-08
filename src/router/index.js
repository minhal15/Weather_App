import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import Customers from '../components/Customers.vue'

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: HomePage
  },
  {
    path: '/About',
    name: 'About us',
    component: About
  },
  {
    path: '/Services',
    name: 'Our Services',
    component: Services
  },
  {
    path: '/Customers',
    name: 'Our Customers',
    component: Customers
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
