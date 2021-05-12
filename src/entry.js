import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// import store from "./redux/store";
import store from "./redux-saga/store";
import { BrowserRouter as Router } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';
import Layout from './layout';

const baseURL = "/BaseUrlDemo";

ReactDOM.render(
  <Provider store={store}>
    <Router basename={baseURL}>
      {/* <Router> */}
      <Layout baseURL={baseURL}/>
    </Router>
  </Provider>
  , document.getElementById('root')
);

