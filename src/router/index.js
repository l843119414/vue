import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/components/login/loginhome'
Vue.use(Router)

// 登录页
const Login = () => import('@/components/Login/Loginhome')
const Nav = () => import('@/components/Nav/Index')
const Home = () => import('@/components/Index')
const Text = () => import('@/components/Home/Index')
const Management = () => import('@/components/management/Index')
const Authority = () => import('@/components/management/authority/Index')

export default new Router({
  routes: [{
    path: '/',
    // name: 'home',
    component: Home,
    children: [
      {
        path: '',
        // name: 'home',
        components: {
          default: Text,
          nav: Nav
        },
        children: [
          {
            path: 'management',
            component: Management,
            children: [
              {
                path: 'authority',
                component: Authority
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  ]
})
