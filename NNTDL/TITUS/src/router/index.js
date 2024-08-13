import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: SignIn
    },
    {
      path: '/register',
      name: 'Register',
      component: SignUp
    },
    {
      path: '/todolist',
      name: 'Dolists',
      component: HomeView
    },
  ]
})

export default router
