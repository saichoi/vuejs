<template>
    <div>
        <!-- transition 컴포넌트와 달리 DOM에 랜더링 된다. 
        tag 프로퍼티를 사용해서 랜더링 될 요소를 제어할 수 있다.
        transition-group을 ul요소로 만들어준다. -->
        <transition-group tag="ul" name="user-list"> 
            <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
        </transition-group>
        <div>
            <input type="text" ref="userNameInput"/>
            <button @click="addUser">Add User</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael']
        };
    },
    methods: {
        addUser() {
            const enteredUserName = this.$refs.userNameInput.value;
            this.users.unshift(enteredUserName);
        },
        removeUser(user) {
            this.users = this.users.filter(usr => usr !== user);
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}
li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}
.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.user-list-enter-active {
    transition: all 1s ease-out;
}
.user-list-enter-to,
.user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}
.user-list-leave-active {
    transition: all 1s ease-in;
    /* 삭제되는 요소의 위치를 알려준다. */
    position: absolute;
}
.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
.user-list-move {
    transition: transform 0.8s ease;
}
</style>