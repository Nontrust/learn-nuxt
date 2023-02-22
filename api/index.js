import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:4000`
})

function fetchProductById(id){
    return instance.get(`/products/${id}`)
}

export { fetchProductById }