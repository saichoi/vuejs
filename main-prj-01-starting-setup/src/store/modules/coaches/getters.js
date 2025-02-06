export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0;
    },
    isCoach(_, getters, _2, rooterGetters) {
        const coaches = getters.coaches;
        const userId = rooterGetters.userId; // 전역에 선언되어 있는 userId에 접근하기 위해서는 rootGetter을 사용해야한다.
        return coaches.some(coach => coach.id === userId);
    }
}