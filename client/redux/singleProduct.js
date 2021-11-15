import axios from "axios";

const FETCH_SINGLE_PRODUCT = "FETCH_SINGLE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
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

const _updateProduct = (product) => ({
  type: UPDATE_PRODUCT,
  product,
});

const deletedProduct = () => ({ type: DELETE_PRODUCT });

export const createProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/api/products/create`, product, {
        headers: {
          Authorization: window.localStorage.token,
        },
      });
      dispatch(getSingleProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (product) => {
  return async (dispatch) => {
    try {
      const { data: updated } = await axios.put(
        `/api/products/${product.id}`,
        product,
        {
          headers: {
            Authorization: window.localStorage.token,
          },
        }
      );
      dispatch(_updateProduct(updated));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function singleProductReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_SINGLE_PRODUCT:
      return action.product;
    case UPDATE_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
