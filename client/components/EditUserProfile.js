import React from "react";

/**
 * COMPONENT
 */

export const EditUserProfile = (props) => {
  return (
    <div>
      <form id='form' className='topBefore'>
        <input id='name' type='text' placeholder='NAME' />
        <input id='email' type='text' placeholder='E-MAIL' />
        <textarea id='message' type='text' placeholder='MESSAGE'></textarea>
        <input id='submit' type='submit' value='GO!'></input>
      </form>
    </div>
  );
};
export default EditUserProfile;
