import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      selectedAlbum: false
    }
  },
  mutations: {
      selectAlbum(state, album) {
          state.selectAlbum = album
    }
  }
})

export default store