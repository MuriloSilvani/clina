import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/pages/Login'
import NotFound from '@/pages/NotFound'
import Commom from '@/pages/Commom'
import Rooms from '@/pages/Rooms'
import Schedule from '@/pages/Schedule'
import ToDo from '@/pages/ToDo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: () => '/login'
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/forgot-password',
    component: ToDo
  }, {
    path: '/',
    component: Commom,
    children: [
      {
        path: 'rooms',
        component: Rooms
      }, {
        path: 'schedule/:_id',
        component: Schedule
      }
    ]
  }, {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
