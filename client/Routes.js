import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import AdminDashboard from "./components/AdminDashboard";
import CheckoutForm from "./components/CheckoutForm";
import Landing from "./components/Landing";
import AdminUsers from "./components/AdminUsers";
import UserProfile from "./components/UserProfile";
import Confirmation from "./components/Confirmation";
import AdminProducts from "./components/AdminProducts";
import AdminEditProducts from "./components/AdminEditProducts";
import AdminAdd from "./components/AdminAdd";
import OrderHistory from "./components/OrderHistory"
import EditUserProfile from "./components/EditUserProfile";
import About from "./components/About";
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin-dash" component={AdminDashboard} />
            <Route path="/admin-users" component={AdminUsers} />
            <Route exact path="/admin-products" component={AdminProducts} />
            <Route path="/admin-products/create" component={AdminAdd} />
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route path="/products/:id/edit" component={AdminEditProducts} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={CheckoutForm} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path='/profile' component={UserProfile} />
            <Route path="/profile/:id" component={OrderHistory} />
            <Route exact path='/profile/edit' component={EditUserProfile} />
            <Route exact path='/about' component={About} />
            <Redirect to='/' />
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route exact path='/products' component={AllProducts} />
            <Route exact path='/products/:id' component={SingleProduct} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/checkout' component={CheckoutForm} />
            <Route exact path='/confirmation' component={Confirmation} />
            <Route exact path='/about' component={About} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
