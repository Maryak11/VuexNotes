<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea
        type="text"
        required
        v-model="value"
        placeholder="type ur note"
      />
      <TagsList :items="getTags" />
      <button class="btn btnPrimary" type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import TagsList from '@/components/UI/TagsList.vue'
export default {
  components: {
    TagsList
  },
  data() {
    return {
      value: ''
    }
  },
  computed: {
    getTags() {
      return this.$store.getters.getAllTags
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('setTask', this.value)
    }
  }
}
</script>
<style lang="scss">
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
