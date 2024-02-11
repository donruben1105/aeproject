import OnBoarding from '@/views/OnBoarding.vue'
import TheSubjects from '@/views/SES/TheSubjects.vue'
import ThePayments from '@/views/SES/ThePayments.vue'
import TheFaculties from '@/views/SES/TheFaculties.vue'
import TheStudents from '@/views/SES/TheStudents.vue'
import TheTerms from '@/views/SES/TheTerms.vue'
import TheSections from '@/views/SES/TheSections.vue'
import TheEnrollments from '@/views/SES/TheEnrollments.vue'
import TheProfile from '@/views/ECOMMERCE/TheProfile.vue'
import TheProduct from '@/views/ECOMMERCE/TheProduct.vue'
import TheSingleProduct from '@/views/ECOMMERCE/TheSingleProduct.vue'
import TheCheckout from '@/views/ECOMMERCE/TheCheckout.vue'
import TheOrder from '@/views/ECOMMERCE/TheOrder.vue'
import TheOfficial from '@/views/BRGY/TheOfficial.vue'
import TheStaff from '@/views/BRGY/TheStaff.vue'
import TheZoneLeader from '@/views/BRGY/TheZoneLeader.vue'
import TheHousehold from '@/views/BRGY/TheHousehold.vue'
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
    {
      path: '/ecommerce/profile',
      name: 'ecommerceProfile',
      component: TheProfile
    },
    {
      path: '/ecommerce/product',
      name: 'ecommerceProduct',
      component: TheProduct
    },
    {
      path: '/ecommerce/product/:id',
      name: 'ecommerceSingleProduct',
      component: TheSingleProduct
    },
    {
      path: '/ecommerce/checkout/:id',
      name: 'ecommerceCheckout',
      component: TheCheckout
    },
    {
      path: '/ecommerce/order',
      name: 'ecommerceOrder',
      component: TheOrder
    },
    {
      path: '/brgy/official',
      name: 'brgyOfficial',
      component: TheOfficial
    },
    {
      path: '/brgy/staff',
      name: 'brgyStaff',
      component: TheStaff
    },
    {
      path: '/brgy/zone/leader',
      name: 'brgyZoneLeader',
      component: TheZoneLeader
    },
    {
      path: '/brgy/household',
      name: 'brgyHousehold',
      component: TheHousehold
    },
  ]
})


export default router
