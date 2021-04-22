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

// 做個轉場動畫
import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";
import "../pages/RouterDemo/AnimatedTransitions.scss"

function router(props) {
  return (
    <TransitionGroup className="transiotionGroup">
      <CSSTransition
        key={props.location.key}
        classNames="fade"
        timeout={500}
      >
        {/* <Switch location={props.location}> */}
        <Switch>
        
          {/* component load 方法1. */}
          {/* component = {Home} */}
          <Route exact path = "/" render={() => {
              return <Home/>
          }}  />

          {/* component load 方法2.(注意!! 這樣寫無法讀取props.location) */}
          {/* <Route path="/about">
            <About />
          </Route> */}

          <Route exact path = "/about" component = {About} />
          <Route path = "/about/:PID" component = {About} />
          <Route path="/login" component={Login} />

          <Route  path="/RecursivePath/:id" component={RecursivePath} />

          <Route path="/Sidebar" component={Sidebar} />
          
          <Route exact path="/AnimatedTransitions">
            <Redirect to="/AnimatedTransitions/hsl/10/90/50" />
          </Route>
          <Route path="/AnimatedTransitions/*" component={AnimatedTransitions} />
          
          {/* <Route path="/characterIntroduction" component = {CharacterIntroduction} /> */}
          {/* <Route path = "/characterIntroduction" component = { () => CharacterIntroduction(props) } /> */}
          <PrivateRoute
            exact 
            path="/characterIntroduction" 
            component = { () => CharacterIntroduction(props) } 
          />
          <Route component={ PageNotFound } />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
};

export default router;

