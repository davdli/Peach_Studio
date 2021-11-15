import axios from "axios";
const TOKEN = "token";
import history from "../history";

// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_CART_ITEMS = "GET_CART_ITEMS";
const UPDATE_CART = 'UPDATE_CART';
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

export const _updateCart = (cartItem) => {
  return {
    type: UPDATE_CART,
    removeProduct: cartItem,
  }
}

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
  console.log('This is the userObj inside cart THUNK:',{userObj});
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
  } else {
    // localStorage.removeItem('GuestCart');
    let guestCart = JSON.parse(localStorage.getItem('GuestCart')); // reads as object
    if (guestCart) {
      localStorage.setItem('GuestCart', JSON.stringify([...guestCart, userObj])); // local storage only supports string data types
      // already in localstorage means we have products in the cart
    } else {
      const cartItem = [ userObj ];
      localStorage.setItem('GuestCart', JSON.stringify(cartItem));
      console.log(JSON.parse(localStorage.getItem('GuestCart')));
    }
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

export const updateCart = (productId, userId) => {
  return async (dispatch) => {
    try {
      // console.log('This is the ProductId and the userId in updateCart call: ', productId, userId);
      const { data } = await axios.post("/api/cart", {productId, userId});
      dispatch(_updateCart(data));
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
      return [...action.cartItems];
    case UPDATE_CART:
      return action.removeProduct;
    case INCREASE_QUANTITY:
      return action.cartItems;
    case DECREASE_QUANTITY:
      return action.cartItems;
    default:
      return state;
  }
}
