import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    <div className='navcontainer'>
      <Link className='navlink' to='/'>
        <h1 className='logo'>PEACH STUDIO</h1>
      </Link>
      {isLoggedIn ? (
        <div className='navbuttons'>
          <Link className='navlink' to='/products'>
            SHOP
          </Link>
          <Link className='navlink' to='/cart'>
            CART
          </Link>
          <Link className='navlink' to='/profile'>
            PROFILE
          </Link>

          {isAdmin ? (
            <Link className='navlink' to='/admin-dash'>
              ADMIN
            </Link>
          ) : null}
          <Link
            className='navlink'
            onClick={handleClick}
            className='navlink'
            to='/'
          >
            LOGOUT
          </Link>
        </div>
      ) : (
        <div className='navbuttons'>
          <Link className='navlink' to='/products'>
            SHOP
          </Link>
          <Link className='navlink' to='/cart'>
            CART
          </Link>
          <Link className='navlink' to='/login'>
            LOGIN
          </Link>
          <Link className='navlink' to='/signup'>
            JOIN
          </Link>
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
