import React from "react";
import { connect } from "react-redux";
import Landing from "./Landing";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */

export const EditUserProfile = (props) => {
  return (
    <div>
      <form id='form' class='topBefore'>
        <input id='name' type='text' placeholder='NAME' />
        <input id='email' type='text' placeholder='E-MAIL' />
        <textarea id='message' type='text' placeholder='MESSAGE'></textarea>
        <input id='submit' type='submit' value='GO!'></input>
      </form>
    </div>
  );
};
export default EditUserProfile;
