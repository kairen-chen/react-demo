import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store"
import { BrowserRouter as Router } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';
import Layout from './layout';


ReactDOM.render(
  <Provider store={store}>
    <Router basename="/酷">
      <Layout />
    </Router>
  </Provider>
  , document.getElementById('root')
);

