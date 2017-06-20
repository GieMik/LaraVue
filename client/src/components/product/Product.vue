<template>
    <div class="col-md-4">
        <div class="thumbnail">
            <img src="http://www.iconarchive.com/download/i55050/mymovingreviews/3d-movers/boxes-brown.ico" alt="product">
            <div class="caption">
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }}</p>
                <hr>
                <p>
                    <a href="#" class="btn btn-default">Widhlist</a>
                    <a href="#" class="btn btn-success">Buy</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['product'],
    data() {
        return {

        }
    },
  }
</script>