<template>
    <div class="container">
        <Header />
        <hr>
        <div class="row">
            <Servers :selected-server="selectedServer" @server-selected="handleServerSelected"/>
            <ServerDetail :server="selectedServer" />
        </div>
        <Footer />
        <hr>
  
    </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';
import ServerDetail from './components/layout/server/ServerDetail.vue';
import Servers from './components/layout/server/Servers.vue';

export default {
    data() {
        return {
            selectedServer: null
        }
    },
    components: {
        Header,
        Footer,
        ServerDetail,
        Servers
    },
    methods: {
        handleServerSelected(server) {
            this.selectedServer = server;
        }
    }
}
</script>

<style>

</style>
