import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/users";
import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";

export class Users extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;

    return (
      <div>
        <div className="content">
          {users.map((user) => {
            return (
              <div key={user.id} className="user-table">
                <table>
                  <tr>
                    <th> Customer Profile</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Shipping Address</th>
                    <th>Admin</th>
                    <th> </th>
                  </tr>
                  <tr>
                    <td>
                      <img src="favicon.ico" />
                    </td>
                    <td>
                      <Link to={`/users/${user.id}`}> {user.firstName} </Link>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.shippingAddress}</td>
                    <td>{user.isAdmin ? "Yes" : "No"}</td>
                    <td>
                      {" "}
                      <button>
                        <Link to={`/users/edit/${user.id}`}>Edit Info</Link>
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = ({ users }) => {
  return {
    users,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapState, mapDispatch)(Users);
