<template>
    <div>
        <button @click="increament">Add 2</button>
        <button @click="increase({value:11})">Add 11</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    methods: {
        // addOne() {
        //     this.$store.dispatch('increment');
        // }
        // ...mapActions(['increment', 'increase'])
        ...mapActions('numbers', {
            increament: 'increment',
            increase: 'increase'
        })
    }
}
</script>