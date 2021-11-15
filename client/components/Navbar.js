import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    {isLoggedIn ? (
      <div className='navcontainer'>
        <Link className='navlink' to='/'>
          <h1 className='logo'>PEACH STUDIO</h1>
        </Link>
        {admin ? (
          <div className='navbuttons'>
            <Link className='navlink' to='/users'>
              ALL USERS
            </Link>
            <Link className='navlink' to='/products'>
              ADD ITEM
            </Link>

            <Link className='navlink' to='/'>
              HOME
            </Link>
            <Link onClick={handleClick} className='navlink' to='/'>
              LOGOUT
            </Link>
          </div>
        ) : (
          <div className='navbuttons'>
            <Link className='navlink' to='/products'>
              SHOP
            </Link>
            <Link className='navlink' to='/'>
              HOME
            </Link>
            <Link className='navlink' to='/cart'>
              CART
            </Link>
            <Link className='navlink' to='/profile'>
              PROFILE
            </Link>
            <Link onClick={handleClick} className='navlink' to='/'>
              LOGOUT
            </Link>
          </div>
        )}
      </div>
    ) : (
      <div className='navcontainer'>
        <Link to='/'>
          {" "}
          <h1 className='logo'>PEACH STUDIO</h1>
        </Link>

        <div className='navbuttons'>
          <Link className='navlink' to='/products'>
            SHOP
          </Link>
          <Link className='navlink' to='/'>
            HOME
          </Link>
          <Link className='navlink' to='/cart'>
            CART
          </Link>
          <Link className='navlink' to='/login'>
            LOGIN
          </Link>
          <Link className='navlink' to='/signup'>
            SIGN UP
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
