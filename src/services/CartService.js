import axios from "../axios";

class CartService{
    fetchCarts = async () => {
        const promise = await new Promise((resolve, reject) => {
            axios.get('carts')
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    return resolve(err);
                })
        });
        return await promise;
    }

    postCart = async (data) => {
        const promise = await new Promise((resolve, reject) => {
            axios.post('carts',data)
                .then((res) => {
                    return resolve(res);
                })
                .catch((err) => {
                    return resolve(err);
                })
        });
        return await promise;
    }
}
export default new CartService();