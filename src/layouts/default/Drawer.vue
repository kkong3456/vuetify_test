<template>
  <v-navigation-drawer
    v-bind="$attrs"
    dark
    :src="require('@/assets/drawermenu.webp')"
    app
  >
    <template
      #img="props"
    >
      <v-img
        :gradient="gradient"
        v-bind="props"
      />
    </template>

    <default-drawer-header />
    <v-divider />
    <default-list :items="items" />
  </v-navigation-drawer>
</template>

<script>
import DefaultDrawerHeader from './DrawerHeader'
import DefaultList from './List'

export default {
  name:'DefaltDrawer',
  components:{
    DefaultDrawerHeader,
    DefaultList,
  },

  data(){
    return{
      gradient:'rgba(0,0,0,.7),rgba(0,0,0,.8)',

      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to:'/' },
        { title: 'Test', icon:'mdi-alpha-t-box',to:'/test'},
        { title:' Pages',icon:'mdi-menu', items:[
          { title:'Authentication',icon:'mdi-login',items:[
            { title:'SignIn', icon:'mdi-login', to:'/authentication/sign-in'},
            { title:'SignUp', icon:'mdi-logout', to:'/authentication/sign-up'},
          ]},
          { title:'ProductList', icon:'mdi-reproduction', to:'/page/product-list'},
        ]},
        { title:'Grid List Page',icon:'mdi-view-dashboard',to:'/grid-list-page'},
        { title:'Break Points', icon:'mdi-view-dashboard',to:'/break-points'},
        { title:'Tables', icon:'mdi-table-settings', to:'/tables'},
        { title:'Forms', icon:'mdi-form-select', to:'/forms'},
        { title:'Buttons', icon:'mdi-gesture-tap-button', to:'/buttons'},
        { title:'Icons', icon:'mdi-emoticon-excited-outline', to:'/icons'},

      ],
    }
  }
}

</script>
<style scoped>

</style>
