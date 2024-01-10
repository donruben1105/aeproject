import OnBoarding from '@/views/SES/OnBoarding.vue'
import TheSubjects from '@/views/SES/TheSubjects.vue'
import ThePayments from '@/views/SES/ThePayments.vue'
import TheFaculties from '@/views/SES/TheFaculties.vue'
import TheStudents from '@/views/SES/TheStudents.vue'
import TheTerms from '@/views/SES/TheTerms.vue'
import TheSections from '@/views/SES/TheSections.vue'
import TheEnrollments from '@/views/SES/TheEnrollments.vue'
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
    {
      path: '/dashboard',
      name: 'dashboard',
      component: OnBoarding
    },
    {
      path: '/enrollment',
      name: 'enrollment',
      component: TheEnrollments
    },
    {
      path: '/section',
      name: 'section',
      component: TheSections
    },
    {
      path: '/term',
      name: 'term',
      component: TheTerms
    },
    {
      path: '/subject',
      name: 'subject',
      component: TheSubjects
    },
    {
      path: '/student',
      name: 'student',
      component: TheStudents
    },
    {
      path: '/faculty',
      name: 'faculty',
      component: TheFaculties
    },
    {
      path: '/payment',
      name: 'payment',
      component: ThePayments
    },
  ]
})

export default router
