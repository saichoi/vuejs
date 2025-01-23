import { createStore } from 'vuex';

import productsModule from './modules/products';
import cartModule from './modules/cart';

const store = createStore({
    modules: {
        prods: productsModule,
        cart: cartModule
    },
    state() {
        return {
            isLoggendIn: false
        }
    },
    mutations: {
        login(state) {
            state.isLoggendIn = true;
        },
        logout(state) {
            state.isLoggendIn = false;
        }
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('logout');
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggendIn;
        }
    }
});

export default store;