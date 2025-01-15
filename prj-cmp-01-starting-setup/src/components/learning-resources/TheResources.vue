<template>
    <div>
        <base-card>
            <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
            <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
        </base-card>
        <component :is="selectedTab"></component>
    </div>
</template>

<script>
import StoredResources from './storedResources.vue';

export default {
    components: {
        StoredResources
    },
    data() {
        return {
            selectedTab: 'stored-resources'
        };
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    }
}
</script>