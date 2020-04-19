import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/items/Product'
import Products from '@/components/items/Products'
import Employees from '@/components/items/Employees'
import Employee from '@/components/items/Employee'
import Login from '@/pages/Login'
import Logout from '@/pages/Logout'
import Secure from '@/pages/Secure'
import Storage from '../services/Storage'

Vue.use(Router);

const APP_TITLE= 'Company'

let routes =  [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title:"Login"
    }
  }, {
    path: '/logout',
    name: 'logout',
    component: Logout, meta: {
      title:"Logout"
    }
  }, {
    path: '/',
    component: Secure,
    meta: {
      title: 'Secure',
      secure:true
    }, children: [
      {
        path: '/',
        name: 'secure.home',
        component: Home,
        meta: {
          title: 'Home',
          secure:true
        }
      },
      {
        path: '/item/products',
        name: 'secure.item.products',
        component: Products,
        meta: {
          title: 'Products',
          secure:true
        },
          component: () => import(/* webpackChunkName: "item" */ '../components/items/Products.vue')
      },
      {
        path: '/item/product',
        name: 'secure.item.product',
        component: Product,
        meta: {
          title: 'Product',
          secure:true
        },
          component: () => import(/* webpackChunkName: "item" */ '../components/items/Product.vue')
      },
      {
        path: '/item/employee',
        name: 'secure.item.employee',
        component: Employee,
        meta: {
          title: 'Employee',
          secure:true
        },
        component: () => import(/* webpackChunkName: "item" */ '../components/items/Employee.vue')
      },
      {
        path: '/item/employees',
        name: 'secure.item.employees',
        component: Employees,
        meta: {
          title: 'Employees',
          secure:true
        },
        component: () => import(/* webpackChunkName: "item" */ '../components/items/Employees.vue')
      }
    ]
  }, 
  
]

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  window.document.title = APP_TITLE + (to.meta && to.meta.title ? ' > ' + to.meta.title : '');

  const isSecure = to.matched.some((route) => route.meta.secure);
  if (!isSecure) return next();
  if (Storage.has('storedToken'))
  {
    next();
          //  next({ name: 'vencimento'})
  
  } else {
    next({
      path: '/login',
      params: { nextUrl: to.fullPath }
  })
}

})
export default router;