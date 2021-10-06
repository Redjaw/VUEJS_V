import { createStore } from 'vuex'
import myCarrelloStore from '@/carrelloStore.js'
import myUserStore from '@/userStore.js'

const store = createStore({
    modules: {
        cart: myCarrelloStore,
        user: myUserStore
    }
})

export default store
