import axios from "axios";

//constants

const SET_USERS = "SET_USERS";
const UPDATE_USER = "UPDATE_USER";

//action creators

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const _updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user,
  };
};

//thunks

export const fetchUsers = () => {
  return async (dispatch) => {
    const users = (await axios.get("/api/users")).data;
    dispatch(setUsers(users));
  };
};

export const updateUser = (user) => {
  return async (dispatch) => {
    const updated = (await axios.put(`/api/users/${user.id}`, user)).data;
    dispatch(_updateUser(updated));
  };
};

//reducer

export default function usersReducer(state = [], action) {
  if (action.type === SET_USERS) {
    state = action.users;
  }
  if (action.type === UPDATE_USER) {
    state = state.map((user) =>
      action.user.id === user.id ? action.user : user
    );
  }

  return state;
}
