import { createStore } from 'vuex'

export default createStore({
state: {
    carrinho: []
    },
    getters: {
    obterItensCarrinho: state => state.carrinho,
    },
    mutations: {
        adicionarAoCarrinho(state, item) {
            this.state.carrinho.push(item);
        },
        removerItem(state, item) {
            let index = state.carrinho.indexOf(item);
            state.carrinho.splice(index, 1);
        },
    }
})

