import axios from "axios";

const LOAD_CUSTOMERS = "LOAD_CUSTOMERS";
const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";
const ADD_CUSTOMER = "ADD_CUSTOMER";

// actions
const _loadCustomers = (customers) => {
  return {
    type: LOAD_CUSTOMERS,
    customers,
  };
};

const __updateCustomer = (customer) => {
  return {
    type: UPDATE_CUSTOMER,
    customer,
  };
};

const __addCustomer = (customer) => {
  return {
    type: ADD_CUSTOMER,
    customer,
  };
};

// thunk
export const fetchCustomer = () => {
  return async (dispatch) => {
    const { data: customer } = await axios.get("/api/customers");
    dispatch(_loadCustomers(customer));
  };
};

export const addCustomer = (
  id,
  firstName,
  lastName,
  shippingAddress,
  history
) => {
  return async (dispatch) => {
    const customer = (
      await axios.post(`/api/customers/${id}`, {
        id,
        firstName,
        lastName,
        shippingAddress,
      })
    ).data;
    dispatch(__addCustomer(customer));
    history.push(`/customers/${id}`);
  };
};

const updateCustomer = (id, firstName, lastName, shippingAddress, history) => {
  return async (dispatch) => {
    const customer = (
      await axios.put(`/api/customers/${id}`, {
        id,
        firstName,
        lastName,
        shippingAddress,
      })
    ).data;
    dispatch(__updateCustomer(customer));
    history.push(`/customers/${id}`);
  };
};

const customerReducers = (state = [], action) => {
  if (action.type === LOAD_CUSTOMERS) {
    state = action.customers;
  }
  if (action.type === UPDATE_CUSTOMER) {
    state = state.map((customer) =>
      customer.id !== action.customer.id ? customer : action.customer
    );
  }
  return state;
};

export default customerReducers;
export { updateCustomer };
