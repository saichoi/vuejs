<template>
    <div class="col-xs-12 col-sm-6">
        <Server :servers="servers" @server-selected="handleSeverSelected"/>
    </div>
</template>

<script>
import Server from './Server.vue';

export default {
    components: {
        Server
    },
    data() {
        return {
            servers: [
                { id: 1, status: 'Normal'},
                { id: 2, status: 'Critical'},
                { id: 3, status: 'Unknown'},
                { id: 4, status: 'Normal'}
            ]
        }
    },
    methods: {
        handleSeverSelected(server) {
            this.$emit('server-selected', server);
        }
    }
}
</script>