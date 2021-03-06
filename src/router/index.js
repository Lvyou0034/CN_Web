import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import Users from "../components/Users"
import Stats from "../components/Stats";
import Udp_tcp from "../components/Udp_tcp";
import Sensitive_voc from "../components/Sensitive_voc";
import Home from "../components/Home";
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/index',
      component: Index,
      children: [
        {
          path: '/users',
          component: Users
        },
        {
          path: '/stats',
          component: Stats
        },
        {
          path: '/udp_tcp',
          component: Udp_tcp
        },
        {
          path: '/sensitive_voc',
          component: Sensitive_voc
        },
        {
          path: '/home',
          component: Home
        }
      ]
    },
  ]
})
