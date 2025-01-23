import counterMutations from './mutations';
import counterActions from './actions';
import counterGetters from './getters';

export default {
    namespaced: true, // state 뿐만 아니라 모듈 전체(mutations, actions, getters 포함)가 지역 모듈로 설정된다.
    state() {
        return {
            counter: 0,
        }
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters
};
