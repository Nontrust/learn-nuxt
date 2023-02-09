<template>
    <div>
        <header>
            <h1>{{ $route.name }} Page</h1>
            <nuxt-link to="/">home</nuxt-link>
            <nuxt-link to="/main">main</nuxt-link>
            <nuxt-link to="/product">product</nuxt-link>
        </header>    
    <Nuxt />
    </div>
</template>

<script>
export default {
    name: 'LearnNuxtDefault',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>