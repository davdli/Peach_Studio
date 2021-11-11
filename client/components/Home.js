import React from "react";
import { connect } from "react-redux";
import Landing from "./Landing";

/**
 * COMPONENT
 */

export const Home = (props) => {
  const { email } = props;

  return (
    <div>
      <h3 class='welcomeuser'>Welcome, {email}</h3>
      <Landing></Landing>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.email
  }
}

export default connect(mapState)(Home);
