import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
//* ------------------ Actions creators --------------------
//* Set the current user
export const setUser = (user) => ({
  type: GET_USER,
  payload: user,
});

//* Set all the users
export const setUsers = (users) => ({
  type: GET_ALL_USERS,
  payload: users,
});

//* ------------------ Thunk creators -----------------------
//* Used to fetch the current user
export const fetchUser = (userId, token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users/${userId}`, {
        headers: { authorization: token },
      });
      dispatch(setUser(data));
    } catch (error) {
      console.log("Failed to fetch current user: " + userId);
      return;
    }
  };
};

//* Used to fetch all users
export const fetchUsers = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/users`, {
        headers: { authorization: token },
      });
      dispatch(setUsers(data));
    } catch (error) {
      console.log("Failed to fetch current users");
      return;
    }
  };
};

//* ------------------ Initial State -----------------------
const initialState = {
  user: {},
  users: [],
};

//*==================== REDUCER FUNCTION ====================
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload };
    case GET_ALL_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

// import axios from "axios";

// //constants

// const SET_USERS = "SET_USERS";
// const UPDATE_USER = "UPDATE_USER";

// //action creators

// export const setUsers = (users) => {
//   return {
//     type: SET_USERS,
//     users,
//   };
// };

// export const _updateUser = (user) => {
//   return {
//     type: UPDATE_USER,
//     user,
//   };
// };

// //thunks

// export const fetchUsers = () => {
//   return async (dispatch) => {
//     const users = (await axios.get("/api/users")).data;
//     dispatch(setUsers(users));
//   };
// };

// export const updateUser = (user) => {
//   return async (dispatch) => {
//     const updated = (await axios.put(`/api/users/${user.id}`, user)).data;
//     dispatch(_updateUser(updated));
//   };
// };

// //reducer

// export default function usersReducer(state = [], action) {
//   if (action.type === SET_USERS) {
//     state = action.users;
//   }
//   if (action.type === UPDATE_USER) {
//     state = state.map((user) =>
//       action.user.id === user.id ? action.user : user
//     );
//   }

//   return state;
// }
