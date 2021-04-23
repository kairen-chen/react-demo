import axios from "axios";

export const increment = () => {
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
    dispatch(fetchUsersRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const login = () => {
  return {
    type: "LOGIN"
  };
}
   
export const logout = () => {
  return {
    type: "LOGOUT"
  };
};

const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST"
  }
}

const fetchUsersSuccess = users => {
  return {
    type: "FETCH_USERS_SUCCESS",
    data: users
  }
}

const fetchUsersFailure = error => {
  return {
    type: "FETCH_USERS_FAILURE",
    data: error
  }
}