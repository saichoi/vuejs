<template>
    <div class="container">
        <Header />
        <hr>
        <div class="row">
            <ServerDetail />
            <Servers />
        </div>
        <Footer />
        <hr>
  
    </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import ServerDetail from './ServerDetail.vue';
import Servers from './Servers.vue';

export default {
    components: {
        Header,
        Footer,
        ServerDetail,
        Servers
    }
}
</script>

<style>

</style>
