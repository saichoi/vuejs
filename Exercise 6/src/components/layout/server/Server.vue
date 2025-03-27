<template>
    <ul class="list-group">
        <li 
            class="list-group-item"
            v-for="server in servers" 
            :key="server.id" 
            @click="serverSelected(server)"
            :class="{'selected': isSelected(server)}"
        >
            Server #{{ server.id }}
        </li>
    </ul>
</template>

<script>
export default {
    props: ['servers'],
    data() {
        return {
            selectedId: null
        }
    },
    methods: {
        serverSelected(server) {
            this.selectedId = server.id
            this.$emit('server-selected', server);
        },
        isSelected(server) {
            return server.id === this.selectedId;
        }
    }
}
</script>

<style scoped>
.selected {
  background-color: #007bff; 
  color: white;
}
</style>