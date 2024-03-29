import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

let store = createStore(
  rootReducer,
  // 在 Redux 中 Middleware 則是扮演 action 到達 reducer 前的第三方擴充。而 applyMiddleware 可以將多個 middlewares 整合並回傳一個 Function，便於使用。
  // Redux Thunk -> Action Creator 變得可以回傳 Function，並在裡面進行同步取值或是額外的 dispatch
  // 使用 asynchronous（非同步）的行為的話需要使用
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
