import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import productsReducer from "../redux/products";
import singleProductReducer from "../redux/singleProduct";
import cartReducer from "../redux/cart";
import usersReducer from "./users";
import customers from "./customers";
import removedProduct from "../redux/removedProduct";

const reducer = combineReducers({
  auth,
  products: productsReducer,
  product: singleProductReducer,
  removedProduct: removedProduct,
  cart: cartReducer,
  user: usersReducer,
  customers,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
