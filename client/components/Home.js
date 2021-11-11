import React from "react";
import { connect } from "react-redux";
import Landing from "./Landing";

/**
 * COMPONENT
 */

export const Home = (props) => {
  const { email } = props;
  const welcomeName = email.split("@");
  return (
    <div>
      <h3 class="welcomeuser">Welcome, {welcomeName[0]}</h3>
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

export default connect(mapState)(Home);
