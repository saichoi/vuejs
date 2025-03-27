<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
        <hr>
        <button @click="resetStatus">Change to Normal</button>
    </div>
</template>

<script>
export default {
    props: ['server'],
    methods: {
        resetStatus() {
            this.server.status = 'Normal';
        }
    }
}
</script>