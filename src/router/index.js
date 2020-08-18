import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/items/product/Products'
import Product from '@/components/items/product/Product'
import Employees from '@/components/items/employee/Employees'
import Employee from '@/components/items/employee/Employee'
import Clients from '@/components/items/client/Clients'
import Client from '@/components/items/client/Client'
import Profile from '@/components/Profile'
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
      }, {
        path: '/profile',
        name: 'secure.profile',
        component: Profile,
        meta: {
          title: 'Profile',
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
          component: () => import(/* webpackChunkName: "item" */ '../components/items/product/Products.vue')
      },
      {
        path: '/item/product',
        name: 'secure.item.product',
        component: Product,
        meta: {
          title: 'Product',
          secure:true
        },
          component: () => import(/* webpackChunkName: "item" */ '../components/items/product/Product.vue')
      },
      {
        path: '/item/employee',
        name: 'secure.item.employee',
        component: Employee,
        meta: {
          title: 'Employee',
          secure:true
        },
        component: () => import(/* webpackChunkName: "item" */ '../components/items/employee/Employee.vue')
      },
      {
        path: '/item/employees',
        name: 'secure.item.employees',
        component: Employees,
        meta: {
          title: 'Employees',
          secure:true
        },
        component: () => import(/* webpackChunkName: "item" */ '../components/items/employee/Employees.vue')
      },
      {
        path: '/item/client',
        name: 'secure.item.client',
        component: Client,
        meta: {
          title: 'Client',
          secure:true
        },
        component: () => import(/* webpackChunkName: "item" */ '../components/items/client/Client.vue')
      },
      {
        path: '/item/clients',
        name: 'secure.item.clients',
        component: Clients,
        meta: {
          title: 'Clients',
          secure:true
        },
        component: () => import(/* webpackChunkName: "item" */ '../components/items/client/Clients.vue')
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