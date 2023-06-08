import { createRouter, createWebHistory } from 'vue-router'
import Posts from "../components/Posts.vue"
import HomePage from '../components/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home Page',
      component: HomePage
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
  ]
})

export default router
