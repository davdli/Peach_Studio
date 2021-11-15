import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AdminDashboard = ({ isAdmin }) => {
  if (isAdmin) {
    return (
      <div>
        <h3>Admin Dashboard</h3>
        <div>
          <p>View registered customers</p>
          <p to="/admin-products">View and update inventory</p>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Access Denied. Must be administrator.</h3>
        <Link to="/">
          <button>Back to Shopping!</button>
        </Link>
      </div>
    );
  }
};

const mapState = (state) => {
  return {
    isAdmin: state.auth.isAdmin,
  };
};

export default connect(mapState)(AdminDashboard);
