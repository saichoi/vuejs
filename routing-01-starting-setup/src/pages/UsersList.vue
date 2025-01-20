<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Save Changes</button>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false
    };
  },
  methods: {
    confirmInput() {
      // do Something
      this.$router.push('/teams');
      // this.$router.back();
      // this.$router.forward();
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  inject: ['users'],
  beforeRouteEnter(to, from, next) {
    console.log('UsersList Cmp beforeRouteEnter');
    console.log(to, from);
    next();
  },

  // 페이지를 실수로 이동하는 것을 방지 할 수 있다. (단, 라우팅을 사용하고 있을 경우 사용가능)
  beforeRouteLeave(to, from, next) {
    console.log('UsersList Cmp beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved) {
      next();
    } else {
      const userWnatToLeave = confirm('Are you sure? You got unsaved changes!');
      // confirm 결과에 따라 즉, 사용자의 입력 결과에 따라 다음 페이지 이동을 승인할지 거부할지 정한다.
      next(userWnatToLeave);
    }
  },
  unmounted() {
    // 이동 후 바로 실행되므로 이동을 취소할 수 없다.
    console.log('unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>