import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: { title: '首页' },
    children: [{
      path: '/systemhome',
      component: () => import('../views/SystemHome.vue'),
      meta: { title: '医院管理'}
    },{
      path: '/hospital',
      component: () => import('../views/Hospital.vue'),
      meta: { title: '医院管理'}
    },{
      path: '/user',
      component: () => import('../views/User.vue'),
      meta: { title: '用户管理'}
    },{
      path: '/doctor',
      component: () => import('../views/Doctor.vue'),
      meta: { title: '医生管理'}
    },]
  },
  
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
