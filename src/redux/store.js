import { createStore, applyMiddleware } from "redux";
import reducer from './reducer';
import thunk from 'redux-thunk'

let store = createStore(
    reducer,
    // Redux Thunk -> Action Creator 變得可以回傳 Function，並在裡面進行同步取值或是額外的 dispatch
    applyMiddleware( thunk )
  )

export default store;