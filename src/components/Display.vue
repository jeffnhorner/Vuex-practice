<template>
    <div>
        <p>Cart ({{ count }})</p>
        <button v-on:click="emptyCart">Empty Cart</button>
    </div>
</template>

<script>
    export default {
        computed: {
            count () {
                return this.$store.state.count;
            },
        },
        methods: {
            emptyCart () {
                this.$store.commit('emptyCart');
            }
        }
    }
</script>

<style lang="scss" scoped>

    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        p {
            margin-right: 1rem;
        }

        button {
            background: #fff;
            background-color: #fff;
            border-color: #e7e7e7;
        }
    }
</style>

