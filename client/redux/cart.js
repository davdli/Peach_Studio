import axios from "axios";
const TOKEN = "token";
import history from "../history";

// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_CART_ITEMS = "GET_CART_ITEMS";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const UPDATED_CART = "UPDATED_CART";

// action creators
export const _addToCart = (cartItem) => {
  return {
    type: ADD_TO_CART,
    cartItem,
  };
};

export const _getCartItems = (cartItems) => {
  return {
    type: GET_CART_ITEMS,
    cartItems,
  };
};

export const _increaseQuantity = (cartItems) => {
  return {
    type: GET_CART_ITEMS,
    cartItems,
  };
};
export const _decreaseQuantity = (cartItems) => {
  return {
    type: GET_CART_ITEMS,
    cartItems,
  };
};
export const _updatedCart = (cartItems) => {
  return {
    type: UPDATED_CART,
    cartItems,
  };
};

// thunks
export const addToCart = (userObj) => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const { data } = await axios.post(
      `/api/products/${userObj.productId}`,
      userObj,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return dispatch(_addToCart(data));
  }
};

export const getCartItems = (user) => {
  return async (dispatch) => {
    try {
      // console.log('This is the user in the cart redux', user);
      // const {id}= user
      const { data } = await axios.put("/api/cart", user);
      dispatch(_getCartItems(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const increaseQuantity = (productId, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put("/api/cart/increase", {
        productId,
        userId,
      });
      dispatch(_increaseQuantity(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const decreaseQuantity = (productId, userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put("/api/cart/decrease", {
        productId,
        userId,
      });
      dispatch(_decreaseQuantity(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchNewCart = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put("/api/cart", user);
      dispatch(_updatedCart(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...action.cartItem };
    case GET_CART_ITEMS:
      return action.cartItems;
    case INCREASE_QUANTITY:
      return action.cartItems;
    case DECREASE_QUANTITY:
      return action.cartItems;
    default:
      return state;
  }
}
