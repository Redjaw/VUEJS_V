const myCarrelloStore = {
    state() {
        return {
            carrello: [],
            price: 0
        }
    },
    getters: {
        getCarrello(state) {
            return state.carrello
        },
        countCarrello(state) {
            return state.carrello.length
        },
        getPrice(state) {
            return state.price
        },
        isItemInCart: (state) => (id) => {
            return state.carrello.indexOf(id) > -1
        }
    },
    actions: {
        addToCart(context, item) {
            context.commit('addItem', item.id)
            context.commit('updatePrice', item.price)
        },
        removeFromCart(context, item) {
            context.commit('removeItem', item.id)
            context.commit('updatePrice', -item.price)
        }
    },
    mutations: {
        addItem(state, item) {
            state.carrello.push(item)
        },
        removeItem(state, item) {
            state.carrello.splice(state.carrello.indexOf(item), 1)
        },
        updatePrice(state, price) {
            state.price = state.price + price
        }
    }
}

export default myCarrelloStore