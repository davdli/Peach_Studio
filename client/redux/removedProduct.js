import axios from "axios";
const TOKEN = "token";
import history from "../history";

// action types
const REMOVED_ITEM = "REMOVED_ITEM";

// action creators
export const _removedItem = (cartItem) => {
    return {
        type: REMOVED_ITEM,
        removeProduct: cartItem,
    };
};

// thunks
export const removeItem = (productId, userId) => {
    return async (dispatch) => {
        try {
            // console.log('This is the ProductId and the userId in removeItem call: ', productId, userId);
            const token = window.localStorage.getItem(TOKEN);
            const { data } = await axios.post("/api/cart", { productId, userId }, {
                headers: {
                    Authorization: token
                }
            });
            dispatch(_removedItem(data));
        } catch (error) {
            console.log(error);
        }
    };
};




export default function removedProduct(state = {}, action) {
    switch (action.type) {
        case REMOVED_ITEM:
            return action.removeProduct;
        default:
            return state;
    }
}
