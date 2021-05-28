import Vue from 'vue'
import VueRouter from 'vue-router'

import PageLayout from '@/layouts/page/Index'
import AuthenticationLayout from '@/layouts/authentication/Index'

//import Test from '@/views/Test'
//const Test=()=> import('@/views/Test');


Vue.use(VueRouter)

const routes=[
  {
    path:'/',
    component:()=>import(
      /*webpackChunkName:"layouts-default-index"*/
      '@/layouts/default/Index'
    ),
    children:[
      {
        path:'/',
        name:'DashBoard',
        component:()=>import(
          /*webpackChunkName:"views-dsahboard"*/
          '@/views/Dashboard'
        )
      },

      {
        path:'/grid-system',
        name:'GridSystem',
        component:()=>import(
          /*webpackChunkName : "views-grid-system"*/
          '@/views/GridSystem'
        )
      },
      {
        path:'/grid-list-page',
        name:'GridListPage',
        component:()=>import(
          /*webpackChunkName : "views-grid-list-page"*/
          '@/views/GridListPage'
        ),
      },
      {
        path:'/break-points',
        name:'BreakPoints',
        component:()=>import(
          /*webpackChunkName : "views-grid-list-page"*/
          '@/views/BreakPoints'
        ),
      },
      {
        path:'/typo-graphy',
        name:'TypoGraphy',
        component:()=>import(
          /*webpackChunkName : "views-typo-graphy"*/
          '@/views/TypoGraphy'
        )
      },
      {
        path:'/tables',
        name:'Tables',
        component:()=>import(
          /*webpackChunkName : "views-tables"*/
          '@/views/Tables'
        )
      },
      {
        path:'/forms',
        name:'Forms',
        component:()=>import(
          /*webpackChunkName : "views-forms"*/
          '@/views/Forms'
        )
      },
      {
        path:'/buttons',
        name:'Buttons',
        component:()=>import(
          /*webpackChunkName : "views-button"*/
          '@/views/Buttons'
        )
      },
      {
        path:'icons',
        name:'Icons',
        component:()=>import(
          /*webpackChunkName : "views-icons"*/
          '@/views/Icons'
        )
      }
    ],
  },
  {
    path:'/authentication',
    component:AuthenticationLayout,
    children:[
      {
        path:'sign-in',
        name:'SignIn',
        component:()=>import (/* webpackChunkName : "views-authentication" */'@/views/Authentication/SignIn'),
      },
      {
        path:'sign-up',
        name:'SignUp',
        component:()=>import (/* webpackChunkName : "views-authentication" */'@/views/Authentication/SignUp'),
      },
    ],
  },
  {
    path:'/page',
    component:()=>import(
      /*webpackChunkName : 'layouts-page-index'*/
      '@/layouts/page/Index'
    ),
    children:[
      {
        path:'product-list',
        name:'ProductList',
        component:()=>import(
          /*webpackChunkName : 'views-page-productlist'*/
          '@/views/Page/ProductList'
        ),
      }
    ]
  },
]



const router=new VueRouter({
  mode:'history',
  routes,
})

export default router
