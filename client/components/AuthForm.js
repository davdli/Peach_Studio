import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";
import Footer from "./Footer";
import { Link } from "react-router-dom";
/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div>
      {displayName === "SIGN UP" ? (
        <div>
          <section id='sectionform'>
            <div className='box-1'>
              {" "}
              <hr />
            </div>
            <div className='box-2 text'>
              <div className='login-div'>
                <div className='logopeach'></div>
                <div className='title'>{displayName}</div>
                <form className='fields' onSubmit={handleSubmit} name={name}>
                  <div>
                    <label htmlFor='first'>
                      <small>First</small>
                    </label>
                    <input className='first' name='first' type='text' />
                  </div>
                  <div>
                    <label htmlFor='last'>
                      <small>Last</small>
                    </label>
                    <input className='last' name='last' type='text' />
                  </div>
                  <div>
                    <label htmlFor='email'>
                      <small>Email</small>
                    </label>
                    <input className='username' name='email' type='text' />
                  </div>
                  <div>
                    <label htmlFor='password'>
                      <small>Password</small>
                    </label>
                    <input className='password' name='password' type='password' />
                  </div>
                  <div>
                    <button className='signin-button' type='submit'>
                      {displayName}
                    </button>
                  </div>
                  {error && error.response && (
                    <div> {error.response.data} </div>
                  )}
                </form>
              </div>{" "}
            </div>
          </section>
        </div>
      ) : (
        <div>
          <section id='sectionform'>
            <div className='box-1'>
              {" "}
              <hr />
            </div>
            <div className='box-2 text'>
              <div className='login-div'>
                <div className='logopeach'></div>
                <div className='title'>{displayName}</div>
                <form className='fields' onSubmit={handleSubmit} name={name}>
                  <div>
                    <label htmlFor='email'>
                      <small>Email</small>
                    </label>
                    <input className='username' name='email' type='text' />
                  </div>
                  <div>
                    <label htmlFor='password'>
                      <small>Password</small>
                    </label>
                    <input className='username' name='password' type='password' />
                  </div>
                  <div>
                    <button className='signin-button' type='submit'>
                      {displayName}
                    </button>
                  </div>
                  {error && error.response && (
                    <div> {error.response.data} </div>
                  )}
                </form>
              </div>{" "}
            </div>
          </section>
        </div>
      )}
      <Footer />
    </div>
  );
};
/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "LOGIN",
    error: state.auth.error,
  };
};
const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "SIGN UP",
    error: state.auth.error,
  };
};
const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      console.log("This is evt.target.name:", evt.target.name);
      if (evt.target.name === "signup") {
        const formName = evt.target.name;
        const first = evt.target.first.value;
        const last = evt.target.last.value;
        const email = evt.target.email.value;
        const password = evt.target.password.value;
        dispatch(authenticate(first, last, email, password, formName));
      } else {
        const formName = evt.target.name;
        const email = evt.target.email.value;
        const password = evt.target.password.value;
        dispatch(authenticate(null, null, email, password, formName));
      }
    },
  };
};
export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
