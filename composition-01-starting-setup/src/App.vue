<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h3>{{ user.age  }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" />
    </div>
  </section>
</template>

<script>
// ref
// 반응형 값을 생성하기 때문에 값이 바뀌면 Vue가 인식하고 감시할 수 있다. 
// 컴포넌트가 제대로 초기화되지 않은 시점에 실행되기 때문에 this 키워드를 사용하지 않는다.
// 상수만 선언해서는 템플릿에서 사용할 수 없기 때문에 setup에서 return을 해야한다.
  
// import { ref } from 'vue'; // 다양한 형태로 사용 가능
import { ref, computed, reactive } from 'vue'; // 객체 형태로만 사용 가능

export default {
  // setup은 초반에 한번만 실행된다.
  setup() {
    // const uName = ref('Maximilian');
    // const uAge = ref(31);
    const user = reactive({
      name: 'Maximilan',
      age: 31
    });
    const firstName = ref('');
    const lastName = ref('');

    const uName = computed(function() {
      return firstName.value + ' ' + lastName.value;
    });

    function setNewAge() {
      user.age = 32;
    }

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    return { userName: uName, user: user, setAge: setNewAge, setFirstName, setLastName }
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 31
  //   };
  // },
  // methods: {
  //   setNewAge() {
  //     this.age = 32;
  //   }
  // }
};
</script>

// setup의 또 다른 사용방법
<!-- 
<script setup>
import { ref } from 'vue';
 
const uName = ref('Maximilian');
 
setTimeout(function() {
  uName.value = 'Max';
}, 2000);
</script>
 -->

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>