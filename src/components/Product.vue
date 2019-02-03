<template>
    <div>
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p><i>${{ product.price }}</i></p>
        <button v-on:click="increment">Add To Cart</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                product: {
                    name: 'Apple Earpods',
                    description: "Apply's most convinient ear phone option with wireless bluetooth technology that will seamlessly connect with all of your eligible Apple products.",
                    price: 160,
                },
            };
        },
        methods: {
            increment () {
                this.$store.commit('increment');
            },
            emptyCart () {
                this.$store.commit('emptyCart');
            },
        },
    }
</script>

<style scoped>
    div {
        width: 100%;
        max-width: 600px;
        margin: 50px auto auto;
        padding: 5px 15px;
        text-align: left;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, .3);
    }
</style>


