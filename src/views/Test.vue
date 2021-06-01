<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      item-key="name"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search (UPPER CASE ONLY)"
          class="mx-4"
        />
      </template>
      <template v-slot:body.append>
        <tr>
          <td />
          <td>
            <v-text-field
              v-model="calories"
              type="number"
              label="Less than"
            />
          </td>
          <td colspan="4" />
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      calories: '',
      desserts: [
        {
          name: '2021-04-1',
          의정부VOC: 159,
          광화문VOC: 6.0,
          서대문VOC: 24,
          광진VOC: 4.0,
          은평VOC: '1%',
        },
        {
          name: '2021-04-2',
          의정부VOC: 237,
          광화문VOC: 9.0,
          서대문VOC: 37,
          광진VOC: 4.3,
          은평VOC: '1%',
        },
        {
          name: '2021-04-3',
          의정부VOC: 237,
          광화문VOC: 9.0,
          서대문VOC: 37,
          광진VOC: 4.3,
          은평VOC: '1%',
        },
        {
          name: '2021-04-4',
          의정부VOC: 237,
          광화문VOC: 9.0,
          서대문VOC: 37,
          광진VOC: 4.3,
          은평VOC: '1%',
        },
        {
          name: '2021-04-5',
          의정부VOC: 237,
          광화문VOC: 9.0,
          서대문VOC: 37,
          광진VOC: 4.3,
          은평VOC: '1%',
        },
        {
          name: '2021-04-6',
          의정부VOC: 237,
          광화문VOC: 9.0,
          서대문VOC: 37,
          광진VOC: 4.3,
          은평VOC: '1%',
        },
        {
          name: '2021-04-7',
          의정부VOC: 237,
          광화문VOC: 9.0,
          서대문VOC: 37,
          광진VOC: 4.3,
          은평VOC: '1%',
        },
      ],
    }
  },
  computed: {
    headers () {
      return [
        {
          text: '일자',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: '의정부지사',
          value: '의정부VOC',
          filter: value => {
            if (!this.calories) return true

            return value < parseInt(this.calories)
          },
        },
        { text: '광화문지사', value: '광화문VOC' },
        { text: '서대문지사', value: '서대문VOC' },
        { text: '광진지사', value: '광진VOC' },
        { text: '은평지사', value: '은평VOC' },
      ]
    },
  },
  methods: {
    filterOnlyCapsText (value, search, item) {
      return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
    },
  },
}
</script>
