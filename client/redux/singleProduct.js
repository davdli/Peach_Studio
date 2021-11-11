import axios from "axios";

const FETCH_SINGLE_PRODUCT = "FETCH_SINGLE_PRODUCT";

export const _fetchSingleProduct = (product) => {
  return {
    type: FETCH_SINGLE_PRODUCT,
    product,
  };
};

export const fetchSingleProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(_fetchSingleProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_SINGLE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
