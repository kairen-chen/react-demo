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
import ModalGallery from '../pages/RouterDemo/ModalGallery'
// 做個轉場動畫
import {
  CSSTransition,
  TransitionGroup
} from "react-transition-group";
import "../pages/RouterDemo/AnimatedTransitions.scss"

function router(props) {
  // console.log("layout 傳過來的 props",props)
  return (
    <TransitionGroup className="transiotionGroup">
      <CSSTransition
        key={props.location.key}
        classNames="fade"
        timeout={500}
      >
        <Switch location={props.location}>
        {/* <Switch> */}
          {/* component load 方法1. */}
          {/* component = {Home} */}
          <Route exact path = "/" render={() => {
              return <Home/>
          }}  />

          {/* component load 方法2.(注意!! 這樣寫無法讀取props.location) */}
          {/* <Route path="/about">
            <About />
          </Route> */}

          <Route exact path = "/about"
            // component = {About} 
            render={() => 
              <About {...props} /> 
          }
          />
          <Route path = "/about/:PID" component = {About} />
          <Route path="/login" component={Login} />

          <Route  path="/RecursivePath/:id" component={RecursivePath} />

          <Route path="/Sidebar" component={Sidebar} />
          
          <Route exact path="/AnimatedTransitions">
            <Redirect to="/AnimatedTransitions/hsl/10/90/50" />
          </Route>
          <Route path="/AnimatedTransitions/*" component={AnimatedTransitions} />
          <Route path = "/ModalGallery/:id/:img" component = {ModalGallery} />
          <Route path = "/ModalGallery" component = {ModalGallery} />
        
          {/* <Route path="/characterIntroduction" component = {CharacterIntroduction} /> */}
          {/* <Route path = "/characterIntroduction" component = { () => CharacterIntroduction(props) } /> */}
          <PrivateRoute
            exact 
            path="/characterIntroduction" 
            // component = { () => CharacterIntroduction(props) } 
            {...props}
            component = {CharacterIntroduction}
          />
          <Route component={ PageNotFound } />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
};

export default router;

