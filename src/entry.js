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
<<<<<<< HEAD
    <Router basename="/酷">
      <Layout />
=======
    <Router>
      <Suspense fallback={ <div>Loading...</div> }>
        <Layout />
      </Suspense>
>>>>>>> b55f18b4b0cccb19bde86e1cf4e9b092cbb61abd
    </Router>
  </Provider>
  , document.getElementById('root')
);

