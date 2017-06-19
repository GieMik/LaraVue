<template>
    <div>
        <h1>Feed <button @click="getUser()">Get User</button></h1>
        <h2 v-if="user">Gotten in user: {{ user.name }}</h2>
        <ul>
            <li v-for="product in products">{{ product.name }} | {{ product.price }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [],
                user: ''
            }
        },
        created() {
            this.$http.get('api/products')
                .then(response => {
                    this.products = response.body;
            })
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