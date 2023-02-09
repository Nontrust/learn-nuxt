<template>
    <div>
        <ul>
            <li v-for="i in 3" :key="i">상품 {{i}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'LearnNuxtProduct',

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