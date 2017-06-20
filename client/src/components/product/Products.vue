<template>
    <div>
        <ul>
            <product :key="product" :product="product" v-for="product in products">{{ product.name }} | {{ product.price }}</product>
        </ul>
    </div>
</template>

<script>
    import Product from './Product.vue';

  export default {
        components: {
            Product
        },
        data() {
            return {
                products: [],
            }
        },
        created() {
            this.$http.get('api/products')
                .then(response => {
            this.products = response.body;
            })
        }
  }
</script>