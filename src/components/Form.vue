<template>
    <div>
        <button v-on:click="add">Increment</button>
    </div>
</template>

<script>
    export default {
        methods: {
            add () {
                this.$store.commit('addToCount', 1);
            },
        },
    }
</script>

