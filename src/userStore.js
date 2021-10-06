const myUserStore = {
    state() {
        return {
            user: {}
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    },
    mutations: {
        addUser(state, user) {
            state.user = user
        }
    }
}

export default myUserStore