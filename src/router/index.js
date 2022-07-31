import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/myLogin.vue'
import mymenu from '@/views/Layout/mymenu'
import layout from '@/views/Layout/Layout'
import main from '@/views/Layout/main'
//异步
const test1=()=>import('@/views/test1/test1')
const test2=()=>import('@/views/test2/test2')
const test3=()=>import('@/views/test3/test3')
Vue.use(VueRouter)

const routes = [
  {

    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    component: layout,
    meta: {
      requireAuth: true
    },
    redirect: '/login',
    children: [{
      path: '/main',
      name: 'main',
      component: main,
      meta: {
        requireAuth: true
      },
  },{
     path: '/test1',
     name: 'test1',
     component: test1,
      meta: {
        requireAuth: true
      },
  },{
    path: '/test2',
    name: 'test2',
    component: test2,
      meta: {
        requireAuth: true
      },

  },{
    path: '/test3',
    name: 'test3',
    component: test3,
      meta: {
        requireAuth: true
      },
  }]
}
]

const router = new VueRouter({
  routes
})

export default router
