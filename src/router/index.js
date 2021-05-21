import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import GridListPage from '@/views/GridListPage'
import BreakPoints from '@/views/BreakPoints'
import TypoGraphy from '@/views/TypoGraphy'
import Tables from '@/views/Tables'
import Forms from '@/views/Forms'
import Buttons from '@/views/Buttons'
import Icons from '@/views/Icons'

import DefaultLayout from '@/layouts/default/Index'

Vue.use(VueRouter)

const routes=[
  {
    path:'/',
    component:DefaultLayout,
    children:[
      {
        path:'/',
        name:'Dashboard',
        component:Dashboard
      },
      {
        path:'/grid-system',
        name:'GridSystem',
        component:GridSystem
      },
      {
        path:'/grid-list-page',
        name:'GridListPage',
        component:GridListPage,
      },
      {
        path:'/break-points',
        name:'BreakPoints',
        component:BreakPoints,
      },
      {
        path:'/typo-graphy',
        name:'TypoGraphy',
        component:TypoGraphy
      },
      {
        path:'/tables',
        name:'Tables',
        component:Tables
      },
      {
        path:'/forms',
        name:'Forms',
        component:Forms
      },
      {
        path:'/buttons',
        name:'Buttons',
        component:Buttons
      },
      {
        path:'/icons',
        name:'Icons',
        component:Icons
      }
    ]
  }  
]

const router=new VueRouter({
  mode:'history',
  routes,
})

export default router
