import axios from "../axios";

class ProductService {
    fetchProducts = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products')
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    return resolve(err);
                })
        });
        return await promise;
    }
    fetchProductCategories = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('products/categories')
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    return resolve(err);
                })
        });
        return await  promise;
    }
    postProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('products', data)
                .then((res) => {
                    return resolve(res);
                })
                .catch((res) => {
                    return resolve(res);
                })
        });
        return await promise;
    }
}

export default new ProductService();