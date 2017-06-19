<template>
    <div id="app">
        <navbar></navbar>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';

    export default {
    components: {
        Navbar
    }
}
</script>

<style lang="scss" scoped>
    .container {
        max-width: 600px;
    }
</style>
