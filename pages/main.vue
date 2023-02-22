<template>
    <div>
        <p>main page</p>
        <div>
            <ul>
                <li v-for="product in products" :key="product.id">
                    <img :src="product.imageUrl" :alt="product.name" />
                    <p>{{product.name}}</p>
                    <p>{{product.price}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { SERVER } from '~/const/global'
export default {
    name: 'LearnNuxtMain',
    // components: { ProductList },
    async asyncData() {
        const response = await axios.get(`${SERVER.BACKEND()}/products`);
        const products = response.data.map((item) => {
            return {
                ...item, 
                imageUrl: `${item.imageUrl}?random=${Math.random()}`
            }
        });
        return {products}
    },
};
</script>

<style lang="scss" scoped>

</style>