import { createApp } from 'vue';
import { createStore }  from 'vuex'

import App from './App.vue';

const counterModule = {
    state() {
        return {
            counter: 0,

        }
    },
    mutations: {
         // 각각의 컴포넌트에서 상태를 수정하는 로직을 넣는 게 아니라 이곳에서 전체적으로 로직을 넣고 어디서든 사용할 수 있다.
         increment(state) {
            // 동기적으로 실행된다. 변경된 상황을 제때 받지 못하면 예상치 못한 에러가 발생할 수 있기 때문이다. => Action을 사용하여 대체할 수 있다.
            // setTimeout(() => {
            state.counter = state.counter + 2;
            // }, 2000);
        },
        increase(state, payload) {
            console.log(state); // 전역 설정해둔 Auth의 state인 isLoggedIn 상태가 표시되지 않는다. -> 모듈 내의 state는 모듈 내의 지역 상태로 치부되기 때문이다.
            state.counter = state.counter + payload.value;
        },
    },
    actions: {
        // mutations와 같은 이름을 사용한다.
        increment(context) {
            setTimeout(() => {
                context.commit('increment');    
            }, 2000);
        },
        increase(context, payload) {
            console.log(context);
            context.commit('increase', payload);    
        },
    },
    getters: {
        testAuth(state, getters, rootState, rootGetters) {
            console.log(getters, rootState, rootGetters); // rootState, rootGetter을 통해 global에 접근할 수 있게 된다.
            return state.isLoggedIn; // state에서 isLoggedIn을 찾을 수 없었다. counterModule에서 global에 있는 isLoggedIn state에 접근할 수 없다.
        },
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizedCounter(_, getters) {
            const finalCounter =  getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            } 
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        },
    }
};

const store = createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    // actions : 비동기식 코드를 허용한다.
    actions: {
        login(context) {
            context.commit('setAuth', { isAuth: true });
        },
        logout(context) {
            context.commit('setAuth', { isAuth: false });
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
