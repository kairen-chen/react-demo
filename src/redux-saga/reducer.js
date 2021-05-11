import * as t from "./actionTypes";

const reducer = (state = { profile: null }, action) => {
    switch (action.type) {
      case t.SET_PROFILE:
        return Object.assign({}, state, {
          profile: action.payload.profile
        });
      default:
        return state;
    }
  };
  
  export default reducer;
  