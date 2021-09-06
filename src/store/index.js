import { createStore } from 'vuex'

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
    }
  },
  actions: {
    setTask(context, payload) {
      const filterTags = this.state.tags.filter(el => el.isActive)
      const newNote = {
        title: payload,
        tags: filterTags
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
