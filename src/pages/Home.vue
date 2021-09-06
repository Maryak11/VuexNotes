<template>
  <div>
    <Form />
    <List />
  </div>
</template>
<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
export default {
  components: {
    Form,
    List
  }
  //   methods: {
  //     // getNotes() {
  //     //   const localNotes = localStorage.getItem('notes')
  //     //   if (localNotes) {
  //     //     this.notes = JSON.parse(localNotes)
  //     //   }
  //     // }
  //   },
  //   mounted() {
  //     this.getNotes()
  //   },
  //   watch: {
  //     notes: {
  //       handler(updateLst) {
  //         localStorage.setItem('notes', JSON.stringify(updateLst))
  //       },
  //       deep: true
  //     }
  //   }
}
</script>
