import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    <div class="navcontainer">
      <Link class="navlink" to="/">
        <h1 class="logo">PEACH STUDIO</h1>
      </Link>
      {isLoggedIn ? (
        <div class="navcontainer">
          <div class="navbuttons">
            <Link class="navlink" to="/products">
              SHOP
            </Link>
            <Link class="navlink" to="/cart">
              CART
            </Link>
            {isAdmin ? (
              <Link class="navlink" to="/admin-dash">
                ADMIN
              </Link>
            ) : null}
            <Link class="navlink" onClick={handleClick} class="navlink" to="/">
              LOGOUT
            </Link>
          </div>
        </div>
      ) : (
        <div class="navcontainer">
          <div class="navbuttons">
            <Link class="navlink" to="/products">
              SHOP
            </Link>
            <Link class="navlink" to="/cart">
              CART
            </Link>
            <Link class="navlink" to="/login">
              Login
            </Link>
            <Link class="navlink" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
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
