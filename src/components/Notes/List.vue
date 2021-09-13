<template>
  <div class="notes-list">
    <div class="note-item" v-for="(note, index) in notes" :key="index">
      <div class="note-header">
        <p v-if="note.isActive" @dblclick="onChangeNote(note.id)">
          {{ note.title }}
        </p>
        <input
          v-else
          :placeholder="note.value"
          @blur="onChangeNoteTitle(note.id)"
          v-model="newValue"
          class="note__input"
          type="text"
        />
        <p style="cursor: pointer" @click="onRemoveNote(index)">Х</p>
      </div>
      <div class="note-footer">
        <TagsList v-if="note.tags.length" isPreview :items="note.tags" />
      </div>
    </div>
  </div>
</template>
<script>
import TagsList from '@/components/UI/TagsList.vue'
import { mapState } from 'vuex'
export default {
  components: {
    TagsList
  },
  data() {
    return {
      newValue: '',
      newNotes: []
    }
  },
  computed: {
    ...mapState(['notes'])
  },
  mounted() {
    this.$store.dispatch('getNotesFromLS')
  },

  methods: {
    onRemoveNote(index) {
      this.$store.dispatch('removeNote', index)
    },
    onChangeNote(noteID) {
      this.$store.dispatch('changeActiveNote', noteID)
    },
    onChangeNoteTitle(noteID) {
      const payload = {
        id: noteID,
        value: this.newValue
      }
      this.$store.dispatch('onChangeNoteTitle', payload)
      this.newValue = ''
    }
  },
  watch: {
    notes: {
      handler() {
        localStorage.setItem('notes1', JSON.stringify(this.notes))
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
.notes-list {
  padding: 40px 0;
}
.note-item {
  width: 100%;
  padding: 18px 20px;
  margin-bottom: 20px;
  border-radius: 14px;
  background-color: #ffffff;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.note-footer {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}
.note_input {
  max-height: 7px;
  align-items: center;
}
</style>
