import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";
import Users from "../components/Users"
import Stats from "../components/Stats";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
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
        }
      ]
    }
  ]
})
