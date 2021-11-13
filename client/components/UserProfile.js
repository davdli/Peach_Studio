import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../redux/singleProduct";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Footer from "./Footer";

/**
 * COMPONENT
 */
export const UserProfile = () => {
  const user = useSelector((state) => state.auth);
  const welcomeName = user.email.split("@");
  console.log(user);
  return (
    <div>
      <div>
        <section id='userprofile'>
          <div class='box-1'>
            <hr />
          </div>
          <div class='box-2 text'>
            <div class='userinfo-div'>
              <div class='logopeach'></div>
              <div class='title'>welcome, {welcomeName[0]}</div>
              <form class='fields'>
                <div>
                  <label htmlFor='email'>
                    <small>Email</small>
                  </label>
                </div>
                <hr />
                <div>
                  <label htmlFor='password'>
                    <small>Address</small>
                  </label>
                </div>
              </form>
            </div>{" "}
          </div>
        </section>
      </div>
      <section id='section-d'></section>
      <section id='section-e'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </p>
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
