<template>
  <v-fade-transition
    mode="out-in"
    duration="50"
  >
    <router-view />
  </v-fade-transition>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
table thead.v-data-table-header th {
      font-size: 20px !important;
}
</style>
