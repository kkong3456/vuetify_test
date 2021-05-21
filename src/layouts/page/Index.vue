<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark`
    >
      <v-toobar-title>Page Layout</v-toobar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name:'PageLayout',
}
</script>
<style scoped>

</style>