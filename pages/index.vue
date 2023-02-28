<template>
    <div class="app">
        <main>
            <search-input :search-keyword="searchKeyword" @input="updateSearchKeyword" @search="searchProducts"/>
            <ul>
                <li v-for="product in products" :key="product.id" class="item flex" @click="moveToDetail(product.id)">
                    <img class="product-image" :src="product.imageUrl" :alt="product.name" />
                    <p>{{product.name}}</p>
                    <span>$ {{product.price}}</span>
                </li>
            </ul>
            <div class="cart-wrapper">
                <button class="btn" >장바구니 바로가기</button>
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios'
import { SERVER } from '~/const/global'
import SearchInput from '~/components/SearchInput';
import { fetchProductByKeyword } from '~/api';
import { randomImageSetter } from '~/util/util'

export default {
    name: 'LearnNuxtMain',
    components: { SearchInput },
    async asyncData() {
        const response = await axios.get(`${SERVER.BACKEND()}/products`)
        const products = response.data.map((item) => {
            return {
                ...item, 
                imageUrl: `${item.imageUrl}?random=${Math.random()}`,
                price: Number.parseInt(item.price)
            }
        })
        return {products}
    },
    data() {
        return {
            searchKeyword:'',
        };
    },
	methods:{
		moveToDetail(id) {
			this.$router.push(`detail/${id}`)
		},
    updateSearchKeyword(keyword) {
      this.searchKeyword = keyword
    },
    async searchProducts()  {
      const response = await fetchProductByKeyword(this.searchKeyword)
      this.products = randomImageSetter(response.data)
    }
	},
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>