import axios from "axios";

class ProductService {

    baseURL = "http://localhost:8080/backEnd/api/v1/";

    addProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post(`${this.baseURL}admin/driver`, data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }


    putProduct = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put(`${this.baseURL}admin/driver`, data)
                .then((res) => {

                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise;
    };



    deleteProduct = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete(`${this.baseURL}admin/driver`, {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };



    fetchProduct = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get(`${this.baseURL}admin/driver`)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }




}

export default new ProductService()