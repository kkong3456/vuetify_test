<template>
<v-container>
   <v-list-item
      v-for="item in items"
      :key="item.title"
      link
      :to="item.to"
      active-class="primary"
      class="py-1"
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title class="text-h6 py-2 red--text text--lighten-3 font-weight-black">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

</v-container>

</template>
<script>
export default {
  name:"DefaultListItem",
  props:{
    item:{}
  }
}

</script>

<style scoped>

</style>
