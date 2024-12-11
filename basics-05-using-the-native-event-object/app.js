const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: ''
    };
  },
  // data에 있는 프로퍼티를 감시. 해당 프로퍼티의 변경이 감지되었을 때 작동한다.
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000)

      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = value + ' ' + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + this.lastName;
    //   }
    // }
  },
  // 연산 프로퍼티 : 함수와 비슷한 기능을 하지만 변수, 프로퍼티와 같이 이름을 지어야한다.
  computed: {
    fullName() {
      // 다른 요소가 변경된 것까지 감지하지 않게 된다.
      console.log('Running again...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + this.lastName;
    }
  },
  methods: {
    outputFullname() {
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');

/*
* Method, Computued, Watch
  1. Method : 이벤트 바인딩. 페이지 변동 사항이 있을 때마다 실행.
  2. Computued(연산 프로퍼티) : 데이터 바인딩. 의존하는 데이터가 바뀔 때만 재평가/재실행. 의존형 데이터에 사용.
  3. Watch(감시자) : 템플릿 직접 사용하지 않음. 모든 프로퍼티 감시 가능. 데이터 변경에 대한 반응을 코드로 실행 가능. 데이터 업데이트가 아닌 감시 역할.
*/