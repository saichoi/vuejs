<template>
    <div>
        <base-card>
            <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
            <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
        </base-card>
        <component :is="selectedTab"></component>
    </div>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';

export default {
    components: {
        StoredResources,
        AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: "The official Vue.js document.",
                    link: "https//vuejs.org"
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: "Learn to google...",
                    link: "https//google.com"
                }
            ]
        };
    },
    provide() {
        return {
            resources: this.storedResources
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'stored-resources' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        }
    },
    methods: {
        setSelectedTab(tab) {
            console.log(tab);
            
            this.selectedTab = tab;
        }
    }
}
</script>