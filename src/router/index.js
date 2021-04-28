import {Suspense, lazy} from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CharacterIntroduction from "../pages/CharacterIntroduction";
import PageNotFound from "../pages/PageNotFound";
import Login from "../pages/Login";
import RecursivePath from "../pages/RouterDemo/RecursivePath";
import Sidebar from "../pages/RouterDemo/Sidebar";
import AnimatedTransitions from "../pages/RouterDemo/AnimatedTransitions";
import PrivateRoute from "./privateRoute/Auth/privateRoute";
import ModalGallery from "../pages/RouterDemo/ModalGallery";
import Loading from "../components/Loading"

// 做個轉場動畫
import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";
import "../pages/RouterDemo/AnimatedTransitions.scss";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

function router(props) {
  // console.log("layout 傳過來的 props",props)
  return (
      <TransitionGroup className="transiotionGroup">
        <CSSTransition
          key={props.location.key}
          classNames="fade"
          timeout={500}
        >
          <Suspense fallback={ <Loading /> }>
            <Switch location={props.location}>
              {/* component load 方法1. */}
              {/* <Route exact path = "/" component = {Home} /> */}
              {/* component load 方法2.(注意!! 這樣寫無法讀取props.location) */}
              <Route exact path = "/" render={() => {
                  return <Home />
              }}  />
              <Route path = "/about/:PID" component = {About} />
              <Route path = "/about"
                render={() => 
                  <About {...props} /> 
                }
              />
              <Route path="/login" 
                render={() => 
                  // 傳baseURL,順序 entry.js -> layout/index.js -> Login.js,
                  <Login baseURL={props.baseURL} /> 
                }
              />
              <Route path="/RecursivePath/:id" component={RecursivePath} />
              <Route path="/Sidebar" component={Sidebar} />
              <Route exact path="/AnimatedTransitions">
                <Redirect to="/AnimatedTransitions/hsl/10/90/50" />
              </Route>
              <Route path="/AnimatedTransitions/*" component={AnimatedTransitions} />
              <Route path = "/ModalGallery/:id/:img" component = {ModalGallery} />
              <Route path = "/ModalGallery"
                render={() => 
                  // 從entry.js -> layout/index.js -> Login.js,傳baseURL
                  <ModalGallery {...props} /> 
                }
              />
              {/* <Route path = "/characterIntroduction" component = { () => CharacterIntroduction(props) } /> */}
              <PrivateRoute
                exact 
                path="/characterIntroduction" 
                {...props}
                component = {CharacterIntroduction}
              />
              <Route component={PageNotFound} />
            </Switch>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
  )
};
export default router;

