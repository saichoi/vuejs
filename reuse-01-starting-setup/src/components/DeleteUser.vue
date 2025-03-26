<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import alertMixin from '../mixins/alert';

export default {
  data() {
    return {
      alertTitle: 'Delete the User?', // mixin에 없는 변수는 자연스럽게 병합된다.
      alertIsVisible: true // mixin에 정의된 것과 동일한 변수를 정의하면 덮어쓰기 된다.
    }
  },
  mixins: [alertMixin]
};
</script>