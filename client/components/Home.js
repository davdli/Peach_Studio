import React from "react";
import { connect } from "react-redux";
import Landing from "./Landing";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */

export const Home = (props) => {
  const user = useSelector((state) => state.auth);
  return (
    <div>
      <h3 class='welcomeuser'>Welcome, {user.firstName}</h3>
      <Landing></Landing>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    em: state.auth.em,
  };
};

export default connect(mapState)(Home);
