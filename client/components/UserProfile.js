import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export const UserProfile = () => {
  const user = useSelector((state) => state.auth);

  return (
    <div>
      <div>
        <section id='userprofile'>
          <div className='box-1'></div>
          <div className='box-2 text'>
            <div className='userinfo-div'>
              <div className='userimg'></div>

  
              <div className='title'>welcome, {user.firstName}</div>
              <form className='userinfofields'>
                <div>
                  <label htmlFor='email'>Email: {user.email}</label>
                </div>
                <div>
                  <label htmlFor='password'>Address:{user.address}</label>
                </div>
                <div>
                  <label htmlFor='password'>First: {user.firstName}</label>
                </div>
                <div>
                  <label htmlFor='password'>Last: {user.lastName}</label>
                </div>
              </form>
            </div>{" "}
          </div>
        </section>
      </div>
      <section id='history-edit'>
        <div className='box-1'>
          {" "}
          <p> HISTORY</p>
        </div>
        <div className='box-1'>
          <Link to='/profile/edit'>
            <p>EDIT INFO</p>
          </Link>
        </div>
      </section>

      <Footer></Footer>
    </div>
  );
};
/**
 * CONTAINER
 */

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
  };
};

export default connect(mapState, null)(UserProfile);
