<template>
  <v-app>
    <default-bar @drawer="drawer=!drawer" />
    <default-drawer v-model="drawer" />
    <default-view />
  </v-app>
</template>

<script>
import DefaultBar from './AppBar';
import DefaultDrawer from './Drawer';
import DefaultView from './View';

export default {
  name:'DefaultLayout',
  components:{
    DefaultBar,
    DefaultDrawer,
    DefaultView,
  },

  data () {
    return {
      drawer:true,
    }
  },

}
</script>
