import React from "react";
import { connect } from "react-redux";
import Landing from "./Landing";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */

export const Home = (props) => {
  const { email } = props;
  let welcomeName = email.split("@");
  const fLetter= welcomeName[0][0].toUpperCase();
  welcomeName= fLetter + welcomeName[0].slice(1);

  return (
    <div>

      <h3 className="welcomeuser">Welcome, {welcomeName}</h3>

      <Landing></Landing>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.auth.email,
  };
};
/**
 * CONTAINER
 */

export default connect(mapState)(Home);
