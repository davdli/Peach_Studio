import axios from 'axios';

const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export const _fetchProducts = (products) => {
  return {
    type: FETCH_PRODUCTS,
    products
  }
}

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/products');
      dispatch(_fetchProducts(data));
    } catch (error) {
      console.log(error);
    }
  }
}

export default function productsReducer(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
