import { createApp } from 'vue';
import { createStore }  from 'vuex'

import App from './App.vue';

const store = createStore({
    state() {
        return {
            counter: 0
        };
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
            state.counter = state.counter + payload.value;
        }
    },
    // actions : 비동기식 코드를 허용한다.
    actions: {
        // mutations와 같은 이름을 사용한다.
        increment(context) {
            setTimeout(() => {
                context.commit('increment');    
            }, 2000);
        },
        increase(context, payload) {
            context.commit('increase', payload);    
        }
    },
    getters: {
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
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
