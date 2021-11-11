import React from "react";
import { connect } from "react-redux";
import Landing from "./Landing";

/**
 * COMPONENT
 */
export const Home = (props) => {
  const { username } = props;

  return (
    <div>
      <h3 class='welcomeuser'>Welcome, {username}</h3>
      <Landing></Landing>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
