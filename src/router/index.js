import {Switch,Route,Redirect} from "react-router-dom";
import About from '../pages/About';
import Home from '../pages/Home';
import CharacterIntroduction from '../pages/CharacterIntroduction';
import PageNotFound from '../pages/PageNotFound';
import Login from '../pages/Login';
import PrivateRoute from './privateRoute/Auth/privateRoute'

function router(props) {

  return (
    <Switch> 

      {/* component load 方法1. */}
      <Route exact path = "/" component = {Home}/>

      {/* component load 方法2. */}
      {/* <Route path="/about">
        <About />
      </Route> */}

      
      <Route exact path = "/about" component = {About} />
      <Route path = "/about/:PID" component = {About} />

      <Route exact path="/login" component={Login} />
      
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

