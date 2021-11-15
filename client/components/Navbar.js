import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    <div className="navcontainer">
      <h1 className="logo">PEACH STUDIO</h1>
    </div>
    <nav>
      {isLoggedIn ? (
        <div>
          <Link to="/products">SHOP</Link>
          <Link to="/cart">CART</Link>
          {isAdmin ? <Link to="/admin-dash">ADMIN DASHBOARD</Link> : null}
          <Link onClick={handleClick} className="navlink" to="/">
            LOGOUT
          </Link>
        </div>
      ) : (
        <div className="navbuttons">
          <Link className="navlink" to="/products">
            SHOP
          </Link>
          <Link className="navlink" to="/cart">
            CART
          </Link>
          <div className="account-links">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
