import WelcomePage from '@/views/WelcomePage.vue'
import Therapy from '@/views/Therapy.vue'
import PsyConscience from '@/views/Psy-Conscience.vue'
import Login from '@/views/login/Login.vue'
import Register from '@/views/register/Register.vue'
import PageNotFound from '@/views/PageNotFound.vue'

export default [
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage
  },
  {
    path: '/therapy',
    name: 'Therapy',
    component: Therapy
  },
  {
    path: '/psy-conscience',
    name: 'Psy-Conscience',
    component: PsyConscience
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      authPage: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      authPage: true
    }
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]
