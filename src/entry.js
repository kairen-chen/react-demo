import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store"
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout';


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>
  , document.getElementById('root')
);

