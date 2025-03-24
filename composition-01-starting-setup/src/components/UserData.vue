<template>
    <div>
        <h2>{{ userName }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<script>
import { computed, inject } from 'vue';

export default {
    props: ['firstName', 'lastName'],
    setup(props, context) {
        const userName = computed(function() {
            // setup 을 호출하는 타이밍이 props를 호출하는 타이밍보다 빠르기 때문에 props 값을 정의하지 못하고 있다.
            return props.firstName + ' ' + props.lastName;
        });

        const age = inject('userAge');

        console.log(context);

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