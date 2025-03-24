<template>
  <section class="container">
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
// ref
// 반응형 값을 생성하기 때문에 값이 바뀌면 Vue가 인식하고 감시할 수 있다. 
// 컴포넌트가 제대로 초기화되지 않은 시점에 실행되기 때문에 this 키워드를 사용하지 않는다.
// 상수만 선언해서는 템플릿에서 사용할 수 없기 때문에 setup에서 return을 해야한다.
  
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
  components: {
    UserData
  },
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const uAge = ref(31);
    const lastNameInput = ref(null);

    const uName = computed(function() {
      return firstName.value + ' ' + lastName.value;
    });

    provide('userAge', uAge);

    // 첫번째 인자 : 감시 대상
    // 두번쨰 인자 : 감시 대상이 변경되면 실행되는 함수
    watch([uAge, uName], function(newValues, oldValues) { 
      console.log('Old age: ', oldValues[0])
      console.log('New age: ', newValues[0])
      console.log('Old name: ', oldValues[1])
      console.log('New name: ', newValues[1])
    });

    function setNewAge() {
      uAge.value = 32;
    }

    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }

    return {
      userName: uName,
      age: uAge,
      setAge: setNewAge,
      firstName,
      lastName,
      lastNameInput,
      setLastName
    }
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
  // },
  // watch: {
  //   age(value) {
  //     console.log(value);
  //   }
  // },
  // provide() {
  //   return { age: this.age };
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