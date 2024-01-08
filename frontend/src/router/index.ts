import LogInVue from '@/views/LogIn.vue'
import SignUpVue from '@/views/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: SignUpVue
    },
    {
      path: '/login',
      name: 'login',
      component: LogInVue
    },
  ]
})

export default router
