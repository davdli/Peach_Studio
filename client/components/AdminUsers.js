import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data: users } = await axios.get("/api/users/", {
        headers: {
          Authorization: window.localStorage.token,
        },
      });
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <div className="user-table">
      <h1>All Current Registered Customers</h1>
      <Link className="navbuttons" to="/admin-dash">
        ← Back To Dashboard
      </Link>
      <div className="content">
        {users.map((user) => {
          return (
            <div key={user.id} className="user-table">
              <div className="user-content">
                <table>
                  <tr>
                    <th> Customer Profile</th>
                    <th>Email</th>
                    <th>EDIT </th>
                  </tr>
                  <tr>
                    <td>
                      <img src="favicon.ico" />
                    </td>

                    <td>{user.email}</td>
                    <td>
                      <Link to="/Admin/Customers">Manage Customer</Link>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapState)(AdminUsers);
