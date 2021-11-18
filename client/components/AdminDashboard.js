import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AdminDashboard = ({ isAdmin }) => {
  if (isAdmin) {
    return (
      <div className="manage">
        <div className="admin-home">
          <h2 className="admin-side"> Admin Dashboard</h2>
          <div className="first-content small ">
            <p className="manage-p">
              {" "}
              <Link className="navbuttons" to="/admin-users">
                CUSTOMERS
              </Link>
            </p>
          </div>
          <div className="first-content small ">
            <p className="manage-p">
              <Link className="navbuttons" to="/admin-products">
                INVENTORY
              </Link>
            </p>
          </div>
        </div>
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
