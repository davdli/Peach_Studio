import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Cart from "./components/Cart";
import AllProducts from "./components/AllProducts";
import Users from "./components/Users";
import SingleProduct from "./components/SingleProduct";
import { me } from "./store";
import UserProfile from "./components/UserProfile";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, admin } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Redirect to="/home" /> */}
            {/* <Route exact path="/" component={Landing} /> */}
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/products' component={AllProducts} />
            <Route exact path='/products/:id' component={SingleProduct} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/profile' component={UserProfile} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/products' component={AllProducts} />
            <Route exact path='/products/:id' component={SingleProduct} />
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
    admin: state.auth.isAdmin,
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
