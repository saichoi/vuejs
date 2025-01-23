export default {
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
}