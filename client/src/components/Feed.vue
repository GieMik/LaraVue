<template>
    <div>
        <h1>Feed <button @click="getUser()">Get User</button></h1>
        <h2 v-if="user">Gotten in user: {{ user.name }}</h2>
        <products></products>
    </div>
</template>

<script>
    import Products from './product/Products.vue';

    export default {
        components: {
            Products
        },
        data() {
            return {
                user: ''
            }
        },
        methods: {
            getUser() {
                 this.$http.get('api/user')
                      .then(response => {
                            this.user = response.body
                      })
            }
        }
    }
</script>