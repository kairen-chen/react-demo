import axios from "axios";
import { createHashHistory } from "history";

const history = createHashHistory();

export const increment = () => {
  console.log(history);
  return {
    type: "ADD",
  };
};

export const decrement = () => {
  return {
    type: "DECR",
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    axios
      // .get('https://jsonplaceholder.typicode.com/users')
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        // response.data is the users
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message));
      });
  };
};

export const login = () => {
  return {
    type: "LOGIN",
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    /**
     *兩者寫法皆可
     *
     * payload比較正統,在reducer get時會多一層payload
     * */
    // data: users,
    payload: {
      data: users,
    },
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_USERS_FAILURE",
    data: error,
  };
};
