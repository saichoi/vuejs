<template>
    <div>
        <h2>{{ userName }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<script>
import { 
    computed, 
    inject, 
    onBeforeMount, 
    onMounted, 
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted
  } from 'vue';

export default {
    props: ['firstName', 'lastName'],
    // Lifecycle
    // beforeCreated, created가 실행되는 시점에 실행되기 때문에 라이프 사이클이 따로 존재하지 않는다. 
    // beforeMount, mounted => onBeforeMount, onMounted
    // beforeUpdate, updated => onBeforeUpdate, onUpdate
    // beforeUnmount, unmounted => onBeforeMount, onMounted
    setup(props, context) {
        const userName = computed(function() {
            // setup 을 호출하는 타이밍이 props를 호출하는 타이밍보다 빠르기 때문에 props 값을 정의하지 못하고 있다.
            return props.firstName + ' ' + props.lastName;
        });

        const age = inject('userAge');

        console.log(context);

        onBeforeMount(function() {
            console.log('onBeforeMount');
        });


        onMounted(function() {
            console.log('onMounted');
        });


        onBeforeUpdate(function() {
            console.log('onBeforeUpdate');
        });


        onUpdated(function() {
            console.log('onUpdated');
        });


        onBeforeUnmount(function() {
            console.log('onBeforeUnmount');
        });


        onUnmounted(function() {
            console.log('onUnmounted');
        });


        // context.emit('save-data', 1) // this.$emit('save-date', 1);

        return { userName, age }
    }
    // computed: {
    //     userName() {
    //         return this.firstName + ' ' + this.lastName;
    //     }
    // }
} 
</script>