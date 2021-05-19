import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import GridListPage from '@/views/GridListPage'
import BreakPoints from '@/views/BreakPoints'
import TypoGraphy from '@/views/TypoGraphy'

Vue.use(VueRouter)

const routes=[
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
]

const router=new VueRouter({
  mode:'history',
  routes,
})

export default router
