import React, { useRef } from "react";
import { connect } from "react-redux";
import Footer from "./Footer";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { useEffect } from "react";

/**
 * COMPONENT
 */
export const Landing = () => {
  return (
    <div>
      <header className='headerbanner'>
        <h1>Peach Studio</h1>
        <p>make your home sweet</p>
      </header>

      <section id='section-b'>
        <div className='box-1'>
          {" "}
          <img className='categimg ch' src='/chair3.jpg' />{" "}
          <p class='t'> CHAIR</p>
        </div>
        <div className='box-1'>
          <img className='categimg tb' src='/table1.jpg' />{" "}
          <p class='t'> TABLE</p>
        </div>
        <div className='box-1'>
          <img className='categimg co' src='/sofa1.jpg' /> <p class='t'>SOFA</p>
        </div>
        <div className='box-1'>
          <img className='categimg dr' src='/dresser1.jpg' />{" "}
          <p class='t'>DRESSER</p>
        </div>
      </section>

      <Controller className='sticky'>
        <Scene triggerHook='onLeave' duration={500} pin>
          {(progress) => (
            <div>
              <Timeline
                totalProgress={progress}
                paused
                target={
                  <section id='section-a'>
                    <p> Well-made furniture for your everyday life </p>
                  </section>
                }
              >
                <Tween from={{ opacity: 1 }} to={{ opacity: 4 }} />
                <Tween to={{ x: 300 }} />
                <Tween from={{ scale: 3 }} to={{ scale: 1 }} />
              </Timeline>
            </div>
          )}
        </Scene>
        <section id='section-d' className='trigger'>
          <video className='landingvideo' autoPlay muted loop>
            <source src='/landingp.mp4' type='video/mp4' />
          </video>
        </section>
        <section id='section-c'>
          <div className='box-1'>
            <img
              className='categimgstatic'
              src='https://i.pinimg.com/564x/6b/4f/69/6b4f690e4fdacdaa553d515881c1dfee.jpg'
            />{" "}
          </div>
          <div className='box-2 text'>
            <p>
              Let us help you curate beautiful items for you to enjoy in your
              home <br />
            </p>
          </div>
        </section>
        <a href='#' className='button'>
          UP
        </a>{" "}
        <Footer></Footer>
      </Controller>
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

export default connect(mapState, null)(Landing);
