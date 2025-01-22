<template>
    <router-view v-slot="slotProps">
      <!-- out-in : 나타나는 컴포넌트보다 사라지는 컴포넌트에 애니메이션이 먼저 적용된다. 기존 컴포넌트가 사라진 다음 새 컴포넌트가 나타난다.-->
      <!-- 페이지가 처음 뜰 때도 애니메이션이 재생(초기 애니메이션)된다. 
      그 이유는 router-view에서 첫 활성 라우트가 빈 라우트('/')이기 때문이다.
      -->
      <transition name="fade-button" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
</template>  

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled(el) {
      console.log(el);
      
      clearInterval(this.enterInterval);
    },
    leaveCancelled(el) {
      console.log(el);
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log('beforeEnter', el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log('enter', el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          //  코드가 너무 많이 vue가 작업이 끝난 것을 인식하지 못하기 때문에 done 함수를 이용해 알려준다.
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      // 애니메이션이 모두 끝나면 호출된다.
      console.log('afterEnter', el);
    },
    beforeLeave(el) {
      console.log('beforeLeave', el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log('leave', el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1- round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          //  코드가 너무 많이 vue가 작업이 끝난 것을 인식하지 못하기 때문에 done 함수를 이용해 알려준다.
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('afterLeave', el);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;

  /* transform이 적용된 모든 곳에 애니메이션을 넣는다. */
  /* transition: transform 0.3s ease-out;  */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-100px); */
  animation: slid-scale 0.3s ease-out forwards;
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-buton-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

.route-enter-active {
  animation: slid-scale 0.4s ease-out;
}
.route-leave-active {
  animation: slid-scale 0.4s ease-in;
}

@keyframes slid-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>