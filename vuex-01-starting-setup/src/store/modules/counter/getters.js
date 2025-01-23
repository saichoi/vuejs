export default {
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