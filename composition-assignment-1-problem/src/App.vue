<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <p v-if="goal.isShow">{{ goal.title }}</p>
  <p v-if="goal2.isShow">{{ goal2.title }}</p>
  <p v-if="isShow">{{ goal3 }}</p>

  <h3>OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="showMyGoal">Toggle Goal</button>
  <button @click="showMyGoal2">Toggle Goal2</button>
  <button @click="showMyGoal3">Toggle Goal3</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  data() {
    return {
      goal3: 'Comback to my position',
      isShow: false
    }
  },
  methods: {
    showMyGoal3() {
      this.isShow = !this.isShow;
    }
  },
  setup() {
    // const goal = ref('Completing a lecture');
    // const isShow = ref(false);
    const goal = ref({
      title: 'Completing a lecture',
      isShow: false
    })

    const goal2 = reactive({
      title: 'Creating My Personal Vue Project',
      isShow: false
    });
    
    function showMyGoal() {
      // isShow.value = !isShow.value;
      goal.value.isShow = !goal.value.isShow;
    }

    function showMyGoal2() {
      goal2.isShow = !goal2.isShow;
    }

    return {
      // myGoal: goal,
      // isShow: isShow,
      goal: goal,
      goal2: goal2,
      showMyGoal: showMyGoal,
      showMyGoal2: showMyGoal2
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>