import { Switch, Route, Redirect } from "react-router-dom";
import About from '../pages/About';
import Home from '../pages/Home';
import CharacterIntroduction from '../pages/CharacterIntroduction';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';
import RecursivePath from '../pages/RouterDemo/RecursivePath';
import Sidebar from '../pages/RouterDemo/Sidebar';
import AnimatedTransitions from '../pages/RouterDemo/AnimatedTransitions';
import PrivateRoute from './privateRoute/Auth/privateRoute'


import "../pages/RouterDemo/AnimatedTransitions.scss"

function router(props) {
  return (
    <Switch> 

          {/* component load 方法1. */}
          <Route exact path = "/" component = {Home}/>

          {/* component load 方法2.(注意!! 這樣寫無法讀取props.location) */}
          {/* <Route path="/about">
            <About />
          </Route> */}

          <Route exact path = "/about" component = {About} />
          <Route path = "/about/:PID" component = {About} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/RecursivePath">
            <Redirect to="/RecursivePath/0"/>
          </Route>
          <Route  path="/RecursivePath/:id" component={RecursivePath} />

          <Route path="/Sidebar" component={Sidebar} />
          
          <Route exact path="/AnimatedTransitions">
            <Redirect to="/AnimatedTransitions/hsl/10/90/50" />
          </Route>
          <Route path="/AnimatedTransitions/*" component={AnimatedTransitions} />
          
          {/* <Route path="/characterIntroduction" component = {CharacterIntroduction} /> */}
          {/* <Route path = "/characterIntroduction" component = { () => CharacterIntroduction(props) } /> */}
          
          {/* 要去這頁前先到PrivateRoute.js檢查有無登入 */}
          <PrivateRoute exact path="/characterIntroduction" component = { () => CharacterIntroduction(props) } />

          {/* <Redirect to = {{ pathname: "/about"}} /> */}
          {/* <Redirect to = "/about" /> */}
          <Route path = "*" component={ PageNotFound } />

    </Switch>
  )
};

export default router;

