<template>
    <div>
        <h1>카트페이지</h1>
        <div>
            <ul>
                <li v-for="cartItem in $store.state.cartItems" :key="cartItem.id">
                    <img :src="cartItem.imageUrl" :alt="cartItem.name">
                    <p>{{cartItem.name}}</p>
                </li>
            </ul>
        </div>
        <div>
            <button>구매하기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LearnNuxtCart',

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