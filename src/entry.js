import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// import store from "./redux-saga/store"
import { BrowserRouter as Router } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';
import Layout from './layout';

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./redux-saga/reducer";
import saga from "./redux-saga/saga";

const baseURL = "/BaseUrlDemo";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

ReactDOM.render(
  <Provider store={store}>
    <Router basename={baseURL}>
      {/* <Router> */}
      <Layout baseURL={baseURL}/>
    </Router>
  </Provider>
  , document.getElementById('root')
);

