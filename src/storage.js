const notes = 'notes'

export const storage = {
  setLocalStorageName(val) {
    localStorage.setItem(notes, JSON.stringify(val))
  },
  getLocalStorageName() {
    return JSON.parse(localStorage.getItem(notes))
  }
}
