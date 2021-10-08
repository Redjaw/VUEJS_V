import { createStore } from 'vuex'

const store = new createStore({
  state: {
        players: [],
        currentUser: '',
      locale: 'it'
  },
  mutations: {
    setPlayers (state, players) {
      state.players = players
      },
      setCurrentUser(state, userId) {
          state.currentUser = userId
      },
      setLocale(state, locale) {
          state.locale = locale
      }
  }
})

export default store