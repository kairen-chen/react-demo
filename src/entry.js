import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store"
import { BrowserRouter as Router } from 'react-router-dom';
// import { HashRouter as Router } from 'react-router-dom';
// import Layout from './layout';
import { Suspense, lazy } from "react";
const Layout = lazy(() => import("./layout"));

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/酷">
    {/* <Router> */}
      <Suspense fallback={ <div>Loading...</div> }>
        <Layout />
      </Suspense>
    </Router>
  </Provider>
  , document.getElementById('root')
);

