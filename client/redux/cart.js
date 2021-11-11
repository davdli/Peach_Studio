// action types
// export const ADD_PRODUCT = 'ADD_PRODUCT'
export const ADD_TO_CART
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const INCREMENT_QTY = 'INCREMENT_QTY'
export const DECREMENT_QTY = 'DECREMENT_QTY'

// action creators
export const _addToCart = (cart) => {
  return {
    type: ADD_TO_CART,
    cart
  }
}

export const _removeProduct = (product) => {
  return {
    type: REMOVE_PRODUCT,
    product
  }
}

export const _incrementQty = (product) => {
  return {
    type: INCREMENT_QTY,
    product
  }
}

export const _decrementQty = (product) => {
  return {
    type: DECREMENT_QTY,
    product
  }
}

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
      console.log(error)
    }
  }
}

export const incrementQty = () => {
  return async (dispatch) => {
    try {

    } catch (error) {
      console.log(error)
    }
  }
}

export const decrementQty = () => {
  return async (dispatch) => {
    try {

    } catch (error) {
      console.log(error)
    }
  }
}


export const addToCart = (quantity, productId, productPrice) => {
  return async dispatch => {
    try {
      const {data} = await axios.put('/api/cart/add', {
        quantity: quantity,
        productId: productId,
        productPrice: productPrice
      })
      dispatch(_addToCart(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {...state, items: action.cart}
    case ADD_TO_CART:
      return {...state, items: action.cart}
    default:
      return state
  }
}
