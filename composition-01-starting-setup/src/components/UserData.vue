<template>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['firstName', 'lastName', 'age'],
    setup(props) {
        const userName = computed(function() {
            // setup 을 호출하는 타이밍이 props를 호출하는 타이밍보다 빠르기 때문에 props 값을 정의하지 못하고 있다.
            return props.firstName + ' ' + props.lastName;
        });

        return { userName }
    }
    // computed: {
    //     userName() {
    //         return this.firstName + ' ' + this.lastName;
    //     }
    // }
}
</script>