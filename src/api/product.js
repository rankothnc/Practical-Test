import {api} from "./axios"

export const getProducts = async () => {
    const response = await api.get('/products')
    return response.data.products
}

export const getProduct = async (id) => {
    const response = await api.get('/products')
    return response.data.products.filter(product => product.id === parseInt(id))[0]
}