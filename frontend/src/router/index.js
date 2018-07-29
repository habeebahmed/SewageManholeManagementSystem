import Vue from 'vue'
import Router from 'vue-router'
import menus from '../config/menu-config.js'

Vue.use(Router)

var routes = [
  {
    path: '/',
    redirect: '/home'
  }
]

menus.forEach((item) => {
  if (item.componentName) {
    routes.push({
      path: `/${item.componentName}`,
      name: item.componentName,
      component: () => import(`@/components/${item.componentName}`)
    })
  } else {
    item.sub.forEach((sub) => {
      routes.push({
        path: `/${sub.componentName}`,
        name: sub.componentName,
        component: () => import(`@/components/${sub.componentName}`)
      })
    })
  }
})

export default new Router({
  mode: 'history',
  routes
})
