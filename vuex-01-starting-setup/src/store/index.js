import { createStore }  from 'vuex'
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters'
import counterModule from './modules/counter/index';

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: rootMutations,
    // actions : 비동기식 코드를 허용한다.
    actions: rootActions,
    getters: rootGetters
});

export default store;