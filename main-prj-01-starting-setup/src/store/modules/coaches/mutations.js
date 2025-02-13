export default {
    registerCoach(state, payload) {
        state.coaches.push(payload);
    },
    setCoaches(state, payload) { // Firebase에서 데이터를 가져온다.
        state.coaches = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }
};