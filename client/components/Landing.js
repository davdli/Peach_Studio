
import React from "react";
import { connect } from "react-redux";
import Footer from "./Footer";

import React from 'react'
// import {connect} from 'react-redux'


/**
 * COMPONENT
 */
export const Landing = () => {

  return (
    <div>
      <header class='headerbanner'>
        <h1>Peach Studio</h1>
        <p>make your home sweet</p>
      </header>
      <section id='section-a'>
        <p></p>
      </section>
      <section id='section-a'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </p>
      </section>
      <section id='section-b'>
        <div class='box-1'>
          {" "}
          <img
            class='categimg ch'
            src='https://images.pexels.com/photos/6044919/pexels-photo-6044919.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          />{" "}
          <p> CHAIR</p>
        </div>
        <div class='box-1'>
          <img
            class='categimg tb'
            src='https://images.unsplash.com/photo-1611486212355-d276af4581c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          />{" "}
          <p> TABLE</p>
        </div>
        <div class='box-1'>
          <img
            class='categimg co'
            src='https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80'
          />{" "}
          <p>SOFA</p>
        </div>
        <div class='box-1'>
          <img
            class='categimg dr'
            src='https://images.pexels.com/photos/6758235/pexels-photo-6758235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          />{" "}
          <p>DRESSER</p>
        </div>
      </section>
      <section id='section-c'>
        <div class='box-1'>
          <img
            class='categimgstatic'
            src='https://i.pinimg.com/originals/80/b9/99/80b99980cf3f8232610c001d7b8a24f5.png'
          />{" "}
        </div>
        <div class='box-2 text'>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore{" "}
          </p>
        </div>
        <a href='#' class='button'>
          ^
        </a>
      </section>
      <section id='section-d'>
        <video class='landingvideo' autoPlay muted loop>
          <source src='/landingp.mp4' type='video/mp4' />
        </video>
      </section>
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


  return (
    <div>
      <h3>Welcome To the Landing</h3>
    </div>
  )
}


/**
 * CONTAINER
 */


// const mapState = state => {
//   return {

//     }
// }


export default Landing;
