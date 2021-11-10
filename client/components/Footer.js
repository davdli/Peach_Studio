import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => (
  <div>
    {" "}
    <footer class='section-footer'>
      <div class='container'>
        <div>
          <Link class='footerlink' to='/home'>
            SHOP
          </Link>

          <Link class='footerlink' to='/home'>
            ABOUT PEACH STUDIO
          </Link>

          <a href='#' class='button'>
            HOME
          </a>
        </div>
        <div></div>
      </div>
    </footer>
  </div>
);

/**
 * CONTAINER
 */

export default Footer;
