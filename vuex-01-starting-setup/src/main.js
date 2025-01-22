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
            state.counter = state.counter + 2;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
        }
    }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
