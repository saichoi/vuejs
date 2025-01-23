export default {
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
}