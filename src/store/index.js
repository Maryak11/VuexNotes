import { createStore } from 'vuex'
import { v1 } from 'uuid'

export const store = createStore({
  state: {
    notes: [],
    tags: [
      { title: 'home', isActive: false },
      { title: 'work', isActive: false },
      { title: 'travel', isActive: false }
    ]
  },

  mutations: {
    setTask(state, payload) {
      state.notes.push(payload)
    },
    changeTagActive(state, tags) {
      state.tags = tags
    },
    removeNote(state, index) {
      state.notes.splice(index, 1)
    },
    changeActiveNote(state, newArrNotes) {
      state.notes = newArrNotes
    },
    onChangeNoteTitle(state, newArrNotes) {
      state.notes = newArrNotes
      console.log(state.notes)
    },
    getNotesFromLS(state) {
      state.notes = JSON.parse(localStorage.getItem('notes1'))
    }
  },
  actions: {
    setTask(context, payload) {
      const filterTags = this.state.tags.filter(el => el.isActive)
      const newNote = {
        id: v1(),
        title: payload,
        tags: filterTags,
        isActive: true
      }
      context.commit('setTask', newNote)
    },
    changeTagActive(context, tag) {
      const newArr = this.state.tags.map(el =>
        tag.title === el.title
          ? { title: el.title, isActive: !el.isActive }
          : { title: el.title, isActive: el.isActive }
      )
      context.commit('changeTagActive', newArr)
    },
    removeNote(context, index) {
      context.commit('removeNote', index)
    },
    changeActiveNote(context, noteID) {
      const newArrNotes = this.state.notes.map(note =>
        note.id === noteID
          ? { ...note, isActive: !note.isActive }
          : { ...note, isActive: note.isActive }
      )
      context.commit('changeActiveNote', newArrNotes)
    },
    onChangeNoteTitle(context, { id, value }) {
      const newArrNotes = this.state.notes.map(note =>
        note.id === id
          ? { ...note, title: value, isActive: !note.isActive }
          : { ...note }
      )
      console.log(value)
      context.commit('onChangeNoteTitle', newArrNotes)
    },
    getNotesFromLS(context) {
      context.commit('getNotesFromLS')
    }
  },

  getters: {
    getAllTags(state) {
      return state.tags
    },
    getNotes(state) {
      return state.notes
    }
  }
})
