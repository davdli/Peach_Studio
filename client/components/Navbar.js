import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn, admin, email, user }) => (
  <div>
    {isLoggedIn ? (
      <div class='navcontainer'>
        <Link class='navlink' to='/'>
          <h1 class='logo'>PEACH STUDIO</h1>
        </Link>
        {admin ? (
          <div className='navbuttons'>
            <Link class='navlink' to='/users'>
              ALL USERS
            </Link>
            <Link class='navlink' to='/products'>
              ADD ITEM
            </Link>

            <Link class='navlink' to='/'>
              HOME
            </Link>
            <Link onClick={handleClick} class='navlink' to='/'>
              LOGOUT
            </Link>
          </div>
        ) : (
          <div className='navbuttons'>
            <Link class='navlink' to='/products'>
              SHOP
            </Link>
            <Link class='navlink' to='/'>
              HOME
            </Link>
            <Link class='navlink' to='/cart'>
              CART
            </Link>
            <Link class='navlink' to='/profile'>
              PROFILE
            </Link>
            <Link onClick={handleClick} class='navlink' to='/'>
              LOGOUT
            </Link>
          </div>
        )}
      </div>
    ) : (
      <div class='navcontainer'>
        <Link to='/'>
          {" "}
          <h1 class='logo'>PEACH STUDIO</h1>
        </Link>

        <div class='navbuttons'>
          <Link class='navlink' to='/products'>
            SHOP
          </Link>
          <Link class='navlink' to='/'>
            HOME
          </Link>
          <Link class='navlink' to='/cart'>
            CART
          </Link>
          <Link class='navlink' to='/login'>
            LOGIN
          </Link>
          <Link class='navlink' to='/signup'>
            SIGN UP
          </Link>
        </div>
      </div>
    )}
  </div>
);
/**
 * CONTAINER
 */
const mapState = ({ auth }) => {
  return {
    isLoggedIn: !!auth.id,
    admin: auth.isAdmin,
    auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    singleUser: (email) => dispatch(setSingleUser(email)),
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
