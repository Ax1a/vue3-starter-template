import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Icon } from '@iconify/vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    }
  ]
})
const app = createApp(App)
const pinia = createPinia()

app.component('Icon', Icon)
app.use(router)
app.use(pinia)
app.mount('#app')
