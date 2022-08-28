import api from '../config/api'

const productService = {
    getProduct(){
        return api.get('/product')
    },
    getProductDetail(id) {
        return api.get(`/product/${id}`)
    }
}

export default productService