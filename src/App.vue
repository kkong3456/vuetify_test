<template>
  <v-app >
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-spacer/>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      v-if="$vuetify.breakpoint.lgAndUp"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

   data () {
      return {
        drawer:true,

        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to:'/' },
          { title:'Grid System',icon:'mdi-view-dashboard',to:'/grid-system'},
          { title:'Grid List Page',icon:'mdi-view-dashboard',to:'/grid-list-page'},
          { title:'Break Points', icon:'mdi-view-dashboard',to:'/break-points'},
        ],
        right: null,
      }
    },



};
</script>
