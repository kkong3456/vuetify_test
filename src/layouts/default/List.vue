<template>
  <v-list
    dense
    nav
  >
    <default-list-item :items="items"></default-list-item>
  </v-list>
</template>

<script>
import DefaultListItem from './ListItem'
export default {
  name:"DefaultList",
  components:{
    DefaultListItem,
  },
  props:{
    items:{
      // type:Array,
      // default:()=>([]),
    }
  }
}
</script>

<style scoped>

</style>
