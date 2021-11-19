import axios from "axios";
const TOKEN = "token";

// action types
const GOT_ORDERS = "GOT_ORDERS";

// action creators
export const _gotOrders = (orders) => {
    return {
        type: GOT_ORDERS,
        orderArr: orders,
    };
};

// thunks
export const getOrders = (userId) => {
    return async (dispatch) => {
        try {
            // console.log('This is the ProductId and the userId in removeItem call: ', productId, userId);
            const token = window.localStorage.getItem(TOKEN);
            const { data } = await axios.get(`/api/users/${userId}/orders`, {
                headers: {
                    authorization: token
                }
            });
            dispatch(_gotOrders(data));
        } catch (error) {
            console.log(error);
        }
    };
};

// Reducer
export default function orders(state = [], action) {
    switch (action.type) {
        case GOT_ORDERS:
            return action.orderArr;
        default:
            return state;
    }
}
