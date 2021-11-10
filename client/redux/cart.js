// action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const INCREMENT_QTY = 'INCREMENT_QTY'
export const DECREMENT_QTY = 'DECREMENT_QTY'

// action creators
export const _addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product
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
export const addProduct = () => {
  return async (dispatch) => {
    try {

    } catch (error) {
      console.log(error)
    }
  }
}

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
