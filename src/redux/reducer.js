// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "ADD":
//       return state + 1;
//     case "DECR":
//       return state - 1; 
//   }
// }

const initialState = {
    loading: false,
    users: [],
    error: '',
    counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        counter: state.counter + 1
      })
    case "DECR":
      return Object.assign({}, state, {
        counter: state.counter - 1
      })
    case "FETCH_USERS_REQUEST":
      return Object.assign({}, state, {
          ...state,
          loading: true
      })
    case "FETCH_USERS_SUCCESS":
      return Object.assign({}, state, {
        loading: false,
        users: action.payload,
        error: ''
      })
    case "FETCH_USERS_FAILURE":
      return Object.assign({}, state, {
        loading: false,
        users: [],
        error: action.payload
      })
    default: return state
  }
}


export default reducer;