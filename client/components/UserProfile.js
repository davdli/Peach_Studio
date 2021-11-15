import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Footer from "./Footer";

/**
 * COMPONENT
 */
export const UserProfile = () => {
  const user = useSelector((state) => state.auth);

  console.log(user);

  const handleEdit = (event) => {
    dispatch(thunkedit(event.target.value));
  };

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
                  <label htmlFor='password'>Address:</label>
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
      <section id='section-b'>
        <div className='box-1'>
          {" "}
          <img
            className='categimg ch'
            src='https://cdn-icons.flaticon.com/png/512/1947/premium/1947199.png?token=exp=1636917805~hmac=ad713ffba51e1ca0e620070d9960e2aa'
          />{" "}
          <p> HISTORY</p>
        </div>

        <div className='box-1'>
          <img
            className='categimg ch'
            src='https://cdn-icons-png.flaticon.com/512/1159/1159633.png'
          />{" "}
          <p>EDIT INFO</p>
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
