import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
// import { HashRouter as Router } from "react-router-dom";
import Layout from "./layout";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { Suspense } from "react";

const baseURL = "/BaseUrlDemo";

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading</div>}>
      <I18nextProvider i18n={i18n}>
        <Router basename={baseURL}>
          {/* <Router> */}
          <Layout baseURL={baseURL} />
        </Router>
      </I18nextProvider>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
