<template>
    <div>
        <h3>{{ counter }}</h3>
        <p>We do more here...</p>
    </div>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters['numbers/normalizedCounter'];
        }
    },
}
</script>