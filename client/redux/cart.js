// action types
export const ADD_TO_CART = "ADD_PRODUCT";
// export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
// export const INCREMENT_QTY = 'INCREMENT_QTY'
// export const DECREMENT_QTY = 'DECREMENT_QTY'

// action creators
export const _addToCart = (cart) => {
  return {
    type: ADD_TO_CART,
    cart,
  };
};

// export const _removeProduct = (product) => {
//   return {
//     type: REMOVE_PRODUCT,
//     product
//   }
// }

// export const _incrementQty = (product) => {
//   return {
//     type: INCREMENT_QTY,
//     product
//   }
// }

// export const _decrementQty = (product) => {
//   return {
//     type: DECREMENT_QTY,
//     product
//   }
// }

// thunks
// export const addProduct = () => {
//   return async (dispatch) => {
//     try {

//     } catch (error) {
//       console.log(error)
//     }
//   }
// }

export const removeProduct = () => {
  return async (dispatch) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
};

export const incrementQty = () => {
  return async (dispatch) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
};

export const decrementQty = () => {
  return async (dispatch) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
};

export const addToCart = (quantity, productId, productPrice) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put("/api/cart/add", {
        quantity: quantity,
        id: productId,
        price: productPrice,
      });
      dispatch(_addToCart(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addItemToCart = (product) => {
  return (dispatch) => {
    return axios
      .post(`/api/cart`, product)
      .then((res) => res.data)
      .then((count) => dispatch(actions.getCartCount(count)));
  };
};

export const putItemInCart = (id, quantity) => {
  return (dispatch) => {
    return axios
      .put(`/api/cart/${id}`, quantity) //
      .then((res) => {
        if (res.status === 204)
          dispatch(actions.updateCartLineItem(productId, quantity));
        else console.error("Failed to update cart");
      });
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: action.cart };
    default:
      return state;
  }
}
